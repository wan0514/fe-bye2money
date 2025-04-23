import getTodayTimestamp from '../../../shared/utils/getTodayTimestamp';

const initialFormState = {
  id: null,
  category: '',
  description: '',
  paymentMethod: '',
  amount: 0,
  type: 'expense',
  timestamp: getTodayTimestamp(),
};

export default initialFormState;
