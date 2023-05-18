import './empty-list.css';

export const EmptyItemComponent = () => {
  return (
    <div className="empty-item">
      <p>Упс, здесь еще ничего нет!</p>
      <button className="empty-item-btn" type="button">
        Поиск Вакансий
      </button>
    </div>
  );
};
