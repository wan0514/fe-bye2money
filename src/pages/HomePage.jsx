import { useReducer, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import deepEqual from '../shared/utils/deepEqual';
import { v4 as uuidv4 } from 'uuid';
import CATEGORY_TYPES from '../shared/constants/categoryOptions';
import useFetchPayments from '../shared/hooks/useFetchPayments';
import initialFormState from '../features/form/reducers/initialFormState';
import formReducer from '../features/form/reducers/formReducer';
import recordSchema from '../features/form/utils/recordSchema';
import Form from '../features/form';
import Record from '../features/record';

const TEST_USER_ID = 1;

function HomePage() {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [originalFormData, setOriginalFormData] = useState(null);
  const { payments, loading, error } = useFetchPayments(TEST_USER_ID);
  const { records, dispatch: recordDataDispatch } = useOutletContext();

  const validationResult = recordSchema.safeParse(formData);
  const isFormValid = validationResult.success;

  const isSubmitEnabled = useMemo(() => {
    const isEditMode = originalFormData !== null;

    return isEditMode ? !deepEqual(formData, originalFormData) : isFormValid;
  }, [formData, originalFormData]);

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleReset = () => {
    setOriginalFormData(null);
    dispatch({ type: 'RESET_FORM' });
  };

  const handleSubmit = () => {
    const isEditMode = originalFormData !== null;
    const validationResult = recordSchema.safeParse(formData);

    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors; // TODO errors : 추후 사용자 ux를 위해 사용될 예정
      return;
    }

    if (isEditMode) {
      // TODO 수정 api 호출
      recordDataDispatch({ type: 'UPDATE_RECORD', payload: formData });
    } else {
      // TODO 생성 api 호출, resonse값으로 id를 받으면 payload에 추가, 현재는 uuid로 랜덤 생성
      recordDataDispatch({
        type: 'ADD_RECORD',
        payload: { ...formData, id: uuidv4() },
      });
    }

    handleReset();
  };

  const handleEdit = (record) => {
    setOriginalFormData(record);
    dispatch({ type: 'INIT_EDIT', payload: record });
  };

  if (loading) return <div>결제수단을 불러오는 중입니다...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        paymentOptions={payments}
        categoryOptions={CATEGORY_TYPES[formData.type]}
        isFormValid={isSubmitEnabled}
      />
      <Record recordData={records} onSelect={handleEdit} />
    </>
  );
}

export default HomePage;
