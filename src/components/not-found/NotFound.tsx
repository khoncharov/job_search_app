import { Link } from 'react-router-dom';
import './not-found.css';

const NotFoundComponent = () => {
  return (
    <div className="auth-container">
      <p>Page not found</p>
      <Link className="empty-item-btn" to="/">
        Home page
      </Link>
    </div>
  );
};

export default NotFoundComponent;
