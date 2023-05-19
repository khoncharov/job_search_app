import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthComponent from './components/auth/Auth.tsx';
import ErrorPageComponent from './components/error-page/ErrorPage.tsx';
import RootComponent from './components/Root.tsx';
import ListComponent from './components/list/List.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    errorElement: <ErrorPageComponent />,
    children: [
      { path: 'vacancies', element: <ListComponent /> },
      { path: 'favorites', element: <AuthComponent /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
