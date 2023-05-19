import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './error-page.css';

const ErrorPageComponent = () => {
  const error = useRouteError();

  let errorStr;
  if (isRouteErrorResponse(error)) {
    errorStr = `Error ${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    errorStr = `Error: ${error.message}`;
  } else {
    errorStr = '';
  }

  return (
    <div className="filling-container">
      <p>{errorStr}</p>
      <Link className="empty-item-btn" to="/">
        Home page
      </Link>
    </div>
  );
};

export default ErrorPageComponent;
