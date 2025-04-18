import { useOutletContext } from 'react-router-dom';
import Header from '../features/header';

function HomePage() {
  const { data } = useOutletContext();
  return (
    <>
      <Header />
      <div>
        기본 페이지입니다. 날짜는 {data.year}.{data.month}
      </div>
    </>
  );
}

export default HomePage;
