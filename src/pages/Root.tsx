import HeaderComponent from '../components/header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import SpinnerComponent from '../components/spinner/Spinner';
import { useEffect } from 'react';

const RootComponent = () => {
  const navigation = useNavigation();

  useEffect(() => {
    document.title = 'Jobored - Главная';
  }, []);

  return (
    <>
      <HeaderComponent />
      {navigation.state === 'loading' ? (
        <div className="overlay-container">
          <SpinnerComponent />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default RootComponent;
