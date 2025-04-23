import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';
import useRecordState from '../shared/hooks/useRecordState';
import Header from '../features/header';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
`;

function App() {
  const { year, month } = useParams();
  const { data: fetchedData, loading } = useFetchRecordsByDate(year, month);
  const { records, dispatch } = useRecordState();

  useEffect(() => {
    if (!loading && fetchedData) {
      dispatch({ type: 'SET_RECORDS', payload: fetchedData });
    }
  }, [loading, fetchedData]);

  return (
    <LayoutWrapper>
      <Header />
      <Content>
        {loading ? (
          <div>loading...</div>
        ) : (
          <Outlet context={{ records, dispatch }} />
        )}
      </Content>
    </LayoutWrapper>
  );
}

export default App;
