import { useReducer, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import useCurrentYearMonthNumber from '../shared/hooks/useCurrentYearMonthNumber';
import { isSameYearMonth, getTimestamp } from '../shared/utils/date';
import { deepEqual } from '../shared/utils/record';
import { v4 as uuidv4 } from 'uuid';
import initialFormState from '../features/form/reducers/initialFormState';
import formReducer from '../features/form/reducers/formReducer';
import recordSchema from '../features/form/utils/recordSchema';
import Form from '../features/form';
import Record from '../features/record';

function HomePage() {
  const { currentYear, currentMonth } = useCurrentYearMonthNumber();
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
  const [originalFormData, setOriginalFormData] = useState(null);
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

  const handleEdit = (record) => {
    setOriginalFormData(record);
    dispatch({ type: 'INIT_EDIT', payload: record });
  };

  const buildRecordToSend = (formData, isEditMode) => {
    return {
      ...formData,
      id: isEditMode ? formData.id : uuidv4(),
      createdAt: isEditMode ? formData.createdAt : getTimestamp(new Date()),
    };
  };

  const addRecordIfCurrentMonth = (record, isNowInCurrentMonth) => {
    if (isNowInCurrentMonth) {
      recordDataDispatch({ type: 'ADD_RECORD', payload: record });
    }
  };

  const updateRecordIfCurrentMonth = (record, isNowInCurrentMonth) => {
    if (isNowInCurrentMonth) {
      recordDataDispatch({ type: 'UPDATE_RECORD', payload: record });
    } else {
      recordDataDispatch({ type: 'DELETE_RECORD', payload: record.id });
    }
  };

  const handleSubmit = async () => {
    const isEditMode = originalFormData !== null;
    const isNowInCurrentMonth = isSameYearMonth(
      currentYear,
      currentMonth,
      formData.date
    );

    const validationResult = recordSchema.safeParse(formData);
    if (!validationResult.success) return;

    try {
      const recordToSend = buildRecordToSend(formData, isEditMode); //TODO 추후 서버로 오는 resonse.data 사용 시 buildRecordToSend 함수 제거

      // TODO 서버 api 추가
      // const response = isEditMode
      //   ? await patchRecordToServer(recordToSend)
      //   : await postRecordToServer(recordToSend);
      // const savedRecord = response.data;

      if (isEditMode) {
        updateRecordIfCurrentMonth(recordToSend, isNowInCurrentMonth); // TODO 서버 연결 시 recordToSend 대신 savedRecord 사용
      } else {
        addRecordIfCurrentMonth(recordToSend, isNowInCurrentMonth);
      }

      handleReset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isFormValid={isSubmitEnabled}
      />
      <Record recordData={records} onSelect={handleEdit} />
    </>
  );
}

export default HomePage;
