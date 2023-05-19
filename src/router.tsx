import { createBrowserRouter } from 'react-router-dom';
import ErrorPageComponent from './components/error-page/ErrorPage.tsx';
import RootComponent from './pages/Root.tsx';
import ListComponent from './components/list/List.tsx';
import './index.css';
import SpinnerComponent from './components/spinner/Spinner.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: 'vacancies',
        element: <ListComponent />,
      },
      { path: 'vacancies/:id', element: <SpinnerComponent /> },
      { path: 'favorites', element: <SpinnerComponent /> },
    ],
  },
]);

export default router;
