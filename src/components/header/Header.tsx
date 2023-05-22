import logoSvg from '../../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

const HeaderComponent: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link className="logo" to="/" reloadDocument>
          <img src={logoSvg} alt="Site logo" width="141" height="36" />
        </Link>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <NavLink to="/vacancies">Поиск Вакансий</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Избранное</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
