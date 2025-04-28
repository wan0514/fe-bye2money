import initialFormState from './initialFormState';

export default function formReducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.field]: action.value,
      };

    case 'INIT':
      return {
        ...action.payload,
      };

    case 'RESET':
      return initialFormState;

    default:
      return state;
  }
}
