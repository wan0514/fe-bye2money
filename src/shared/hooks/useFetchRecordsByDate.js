import { useState, useEffect } from 'react';
import { BASE_URL, API } from '../constants/api';

const useFetchRecordsByDate = (year, month) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (year, month) => {
    try {
      const response = await fetch(
        `${BASE_URL}${API.RECORDS}?year=${year}&month=${month}`
      );
      if (!response.ok) {
        throw new Error('Data file not found');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message); //TODO 메세지에 따라 외부에서 사용자를 위한 에러핸들링 처리
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (year && month) {
      setLoading(true);
      setError(null);
      setData([]);
      fetchData(year, month);
    }
  }, [year, month]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    fetchData(year, month);
  };

  return { data, loading, error, refetch };
};

export default useFetchRecordsByDate;
