import { useEffect } from 'react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { CustomErrorResponse } from '../../types/response';
import './error-page.css';

const ErrorPageComponent: React.FC = () => {
  const error = useRouteError();

  let errorStr;
  if (isRouteErrorResponse(error)) {
    if (error.internal) {
      errorStr = `Error ${error.status}: ${error.statusText} [${error.error?.message}]`;
    } else {
      const e = error.data as CustomErrorResponse;
      errorStr = `Error ${e.error.code}: ${e.error.message}`;
    }
  } else if (error instanceof Error) {
    errorStr = `Error: ${error.message}`;
  } else {
    errorStr = '';
  }

  useEffect(() => {
    document.title = 'Страница не найдена';
  }, []);

  return (
    <div className="filling-container">
      <p>{errorStr}</p>
      <Link className="empty-item-btn" to="/vacancies" reloadDocument>
        Home page
      </Link>
    </div>
  );
};

export default ErrorPageComponent;
