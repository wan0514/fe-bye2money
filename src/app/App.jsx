import { useParams, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import getYearMonth from '../shared/utils/getYearMonth';
import useFetchRecordsByDate from '../shared/hooks/useFetchRecordsByDate';

function App() {
  const { year: paramYear, month: paramMonth } = useParams();
  const { year: currentYear, year: currentMonth } = getYearMonth(new Date());

  const year = paramYear || currentYear;
  const month = paramMonth || currentMonth;

  const { data, loading } = useFetchRecordsByDate(year, month);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!paramYear || !paramMonth) {
    return <Navigate to={`/${currentYear}/${currentMonth}`} />;
  }

  return <Outlet context={{ data }} />;
}

export default App;
