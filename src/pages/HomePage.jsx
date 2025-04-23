import { useReducer } from 'react';
import { useOutletContext } from 'react-router-dom';
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
  const { payments, loading, error } = useFetchPayments(TEST_USER_ID);
  const { records } = useOutletContext();

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FORM' });
  };

  const handleSubmit = () => {
    const result = recordSchema.safeParse(formData);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors; // TODO errors : 추후 사용자 ux를 위해 사용될 예정
      return;
    }
    // TODO 서버로 전송
    handleReset();
  };

  const handleEdit = (record) => {
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
      />
      <Record recordData={records} onSelect={handleEdit} />
    </>
  );
}

export default HomePage;
