import { useState, useEffect } from 'react';
import { BASE_URL, API } from '../constants/api';

export default function useFetchPayments(userId) {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPayments = async () => {
    try {
      const response = await fetch(`${BASE_URL}${API.PAYMENTS}`);
      if (!response.ok) {
        throw new Error('Data file not found');
      }

      const result = await response.json();
      setPayments(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    fetchPayments();
  }, [userId]);

  return { payments, loading, error };
}
