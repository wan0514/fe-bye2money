import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import getYearMonth from '../shared/utils/getYearMonth';
import buildUrlWithPage from '../shared/utils/buildUrlWithPage';

import HomePage from '../pages/HomePage';
import CalendarPage from '../pages/CalendarPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from './App';

function AppRouter() {
  const { year, month } = getYearMonth(new Date());
  const initialUrl = buildUrlWithPage(year, month, 'home');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={initialUrl} />} />
        <Route path="/:year/:month" element={<App />}>
          <Route path="home" element={<HomePage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="stats" element={<StatsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
