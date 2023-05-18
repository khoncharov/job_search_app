import './keyword-input.css';

export const KeywordInputComponent = () => {
  return (
    <div className="keyword-input__container">
      <input
        className="keyword-input"
        aria-label="Поиск по названию вакансии"
        type="text"
        placeholder="Введите название вакансии"
      />
      <div className="keyword-input__icon"></div>
      <button type="button" className="btn-prime btn-size-s keyword-input__btn">
        Поиск
      </button>
    </div>
  );
};
