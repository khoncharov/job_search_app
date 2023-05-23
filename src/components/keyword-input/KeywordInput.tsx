import { useState } from 'react';
import { SearchAction, SearchBy } from '../jobs-list/jobs-list-reducer';
import './keyword-input.css';

interface KeywordInputProps {
  onSearch: React.Dispatch<SearchAction>;
}

const KeywordInputComponent: React.FC<KeywordInputProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const btnHandler = () => {
    onSearch({ type: SearchBy.KEYWORD, payload: value });
  };

  const keyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') btnHandler();
  };

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div className="keyword-input__container">
      <input
        className="keyword-input"
        aria-label="Поиск по названию вакансии"
        type="text"
        value={value}
        onInput={inputHandler}
        placeholder="Введите название вакансии"
        onKeyDown={keyDownHandler}
      />
      <div className="keyword-input__icon"></div>
      <button
        type="button"
        className="btn-prime btn-size-s keyword-input__btn"
        onClick={btnHandler}
      >
        Поиск
      </button>
    </div>
  );
};

export default KeywordInputComponent;
