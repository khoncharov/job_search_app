import { createBrowserRouter } from 'react-router-dom';
import ErrorPageComponent from './components/error-page/ErrorPage.tsx';
import RootComponent from './pages/Root.tsx';
import { rootLoader } from './pages/root-loader.ts';
import JobsListComponent from './components/jobs-list/JobsList.tsx';
import JobDetailsComponent from './components/job-details/JobDetails.tsx';
import jobDetailsLoader from './components/job-details/job-details-loader.ts';
import JobsFavoriteListComponent from './components/jobs-favorite-list/JobsFavoriteList.tsx';
import jobFavoriteLoader from './components/jobs-favorite-list/job-favorite-loader.ts';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />,
    loader: rootLoader,
    errorElement: <ErrorPageComponent />,
    children: [
      {
        path: 'vacancies',
        element: <JobsListComponent />,
      },
      {
        path: 'vacancies/:id',
        element: <JobDetailsComponent />,
        loader: jobDetailsLoader,
      },
      {
        path: 'favorites',
        element: <JobsFavoriteListComponent />,
        loader: jobFavoriteLoader,
      },
    ],
  },
]);

export default router;
