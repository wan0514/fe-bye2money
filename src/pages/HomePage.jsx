import { useReducer } from 'react';
import { useOutletContext } from 'react-router-dom';
import CATEGORY_TYPES from '../shared/constants/categoryOptions';
import getTodayTimestamp from '../shared/utils/getTodayTimestamp';
import formReducer from '../shared/reducers/formReducer';
import Form from '../features/form';

const initialFormState = {
  id: null, // 생성 시에는 null, 수정 시에는 서버에서 받은 id
  category: '',
  description: '',
  paymentMethod: '',
  amount: '',
  type: 'expense',
  timestamp: getTodayTimestamp(),
};

//TODO fetch로 결제수단 가져오기
const mockPaymentOptions = ['현대카드', '신한카드'];

function HomePage() {
  const [formData, dispatch] = useReducer(formReducer, initialFormState);
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
  };

  const handleEdit = (record) => {
    dispatch({ type: 'INIT_EDIT', payload: record });
  };

  return (
    <>
      <Form
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        paymentOptions={mockPaymentOptions}
        categoryOptions={CATEGORY_TYPES[formData.type]}
      />
      <button onClick={handleEdit}>수정할 레코드</button>
    </>
  );
}

export default HomePage;
