import { useOutletContext, useLocation } from 'react-router-dom';
import { getActiveTabFromPath } from '../shared/utils/getActiveTabFromPath';
import Header from '../features/header';

function CalendarPage() {
  const { data } = useOutletContext();

  const { pathname } = useLocation();
  const activeTab = getActiveTabFromPath(pathname);

  return (
    <>
      <Header year={data.year} month={data.month} activeTab={activeTab} />
      <div>
        달력 페이지입니다. 날짜는 {data.year}.{data.month}
      </div>
    </>
  );
}

export default CalendarPage;
