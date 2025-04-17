import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CalendarPage from '../pages/CalendarPage';
import StatsPage from '../pages/StatsPage';
import NotFoundPage from '../pages/NotFoundPage';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/:year/:month" element={<HomePage />} />
          <Route path="/calendar/:year/:month" element={<CalendarPage />} />
          <Route path="/stats/:year/:month" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
