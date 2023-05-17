import logoSvg from '../../assets/logo.svg';
import './header.css';

export const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href="./">
          <img src={logoSvg} alt="Site logo" width="141" height="36" />
        </a>
        <nav className="navigation">
          <ul className="navigation-list">
            <li>
              <a href="#">Поиск Вакансий</a>
            </li>
            <li>
              <a href="#">Избранное</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
