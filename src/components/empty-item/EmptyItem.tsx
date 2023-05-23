import { Link } from 'react-router-dom';
import './empty-list.css';

const EmptyItemComponent: React.FC = () => {
  return (
    <div className="empty-item">
      <p>Упс, здесь еще ничего нет!</p>
      <Link className="empty-item-btn" to="/vacancies">
        Поиск Вакансий
      </Link>
    </div>
  );
};

export default EmptyItemComponent;
