import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthComponent from './components/auth/Auth.tsx';
import NotFoundComponent from './components/not-found/NotFound.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthComponent />,
    errorElement: <NotFoundComponent />,
    children: [
      // { path: '/favorites', element: <Root /> },
      // { path: '/details', element: <Root /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
