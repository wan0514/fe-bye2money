import Layout from '../layouts/Layout';
import { Outlet } from 'react-router-dom';
import Header from '../features/header';

function App() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default App;
