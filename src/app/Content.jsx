import { useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';
import useRecordState from '../shared/hooks/useRecordState';
import ContentLayout from '../layouts/ContentLayout';

export default function Content() {
  const { year, month } = useParams();
  const {
    data: fetchedData,
    loading,
    error,
    refetch,
  } = useFetchRecordsByDate(year, month);
  const { records, dispatch } = useRecordState(fetchedData);

  useEffect(() => {
    if (!loading) {
      dispatch({ type: 'SET_RECORDS', payload: fetchedData });
    }
  }, [loading, fetchedData, dispatch]);

  return (
    <ContentLayout>
      <Outlet context={{ records, dispatch, loading, error, refetch }} />
    </ContentLayout>
  );
}
