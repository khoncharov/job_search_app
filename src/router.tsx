import { createBrowserRouter } from 'react-router-dom';
import ErrorPageComponent from './components/error-page/ErrorPage.tsx';
import RootComponent from './pages/Root.tsx';
import JobsListComponent from './components/jobs-list/JobsList.tsx';
import JobDetailsComponent from './components/job-details/JobDetails.tsx';
import JobsFavoriteListComponent from './components/jobs-favorite-list/JobsFavoriteList.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: 'vacancies',
        element: <JobsListComponent />,
      },
      { path: 'vacancies/:id', element: <JobDetailsComponent /> },
      { path: 'favorites', element: <JobsFavoriteListComponent /> },
    ],
  },
]);

export default router;
