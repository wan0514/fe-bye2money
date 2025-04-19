import { useParams, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';

import { getActiveTabFromPath } from '../shared/utils/getActiveTabFromPath';
import Header from '../features/header';

function App() {
  const { year, month } = useParams();
  const { data, loading } = useFetchRecordsByDate(year, month);

  const { pathname } = useLocation();
  const activeTab = getActiveTabFromPath(pathname);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header year={data.year} month={data.month} activeTab={activeTab} />
      <Outlet context={{ data }} />
    </>
  );
}

export default App;
