import HeaderComponent from './header/Header';
import { Outlet } from 'react-router-dom';
import './root.css';

const RootComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};

export default RootComponent;
