import { useReducer } from 'react';
import { useOutletContext } from 'react-router-dom';
import CATEGORY_TYPES from '../shared/constants/categoryOptions';
import useFetchPayments from '../shared/hooks/useFetchPayments';
import initialFormState from '../features/form/reducers/initialFormState';
import formReducer from '../features/form/reducers/formReducer';
import Form from '../features/form';

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
    // TODO 유효성 검사 변경(현재는 테스트)
    const isValid =
      formData.amount &&
      formData.description &&
      formData.category &&
      formData.paymentMethod;

    if (!isValid) {
      alert('모든 입력값은 필수입니다.');
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
      <button onClick={handleEdit}>수정할 레코드</button>
    </>
  );
}

export default HomePage;
