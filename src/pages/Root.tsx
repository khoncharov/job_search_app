import HeaderComponent from '../components/header/Header';
import { Navigate, Outlet } from 'react-router-dom';

const RootComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Navigate to="/vacancies" />
    </>
  );
};

export default RootComponent;
