import { useParams, useNavigate, useLocation } from 'react-router-dom';

function MonthNavigator() {
  const { year, month } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const buildNewPath = (monthOffset) => {
    const currentMonthNumber = parseInt(month, 10);
    const currentYearNumber = parseInt(year, 10);

    const updatedDate = new Date(
      currentYearNumber,
      currentMonthNumber - 1 + monthOffset
    );

    const updatedYear = updatedDate.getFullYear();
    const updatedMonth = String(updatedDate.getMonth() + 1).padStart(2, '0');

    const remainingPath = pathname.split('/').slice(3).join('/');
    return `/${updatedYear}/${updatedMonth}/${remainingPath}`;
  };

  const goToNextMonth = () => navigate(buildNewPath(1));
  const goToPreviousMonth = () => navigate(buildNewPath(-1));

  return { goToNextMonth, goToPreviousMonth };
}

export default MonthNavigator;
