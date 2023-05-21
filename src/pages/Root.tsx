import HeaderComponent from '../components/header/Header';
import { Outlet } from 'react-router-dom';

const RootComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default RootComponent;
