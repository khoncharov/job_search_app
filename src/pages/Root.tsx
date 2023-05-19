import HeaderComponent from '../components/header/Header';
import { Navigate, Outlet } from 'react-router-dom';
import './root.css';

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
