import { useReducer, useMemo } from 'react';
import { getSortedRecordsByDate } from '../../shared/utils/record';

function recordReducer(state, action) {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.payload;
    case 'ADD_RECORD':
      return [...state, action.payload];
    case 'UPDATE_RECORD':
      return state.map((record) =>
        record.id === action.payload.id
          ? { ...record, ...action.payload }
          : record
      );
    case 'DELETE_RECORD':
      return state.filter((record) => record.id !== action.payload);
    default:
      return state;
  }
}

function useRecordState() {
  const initialData = [];
  const [state, dispatch] = useReducer(recordReducer, initialData);

  // 최신순으로 정렬 후 반환
  const sortedRecords = useMemo(() => getSortedRecordsByDate(state), [state]);
  return { records: sortedRecords, dispatch };
}

export default useRecordState;
