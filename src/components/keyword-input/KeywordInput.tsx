import { useEffect, useState } from 'react';
import './keyword-input.css';

const KeywordInputComponent: React.FC = () => {
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    console.log(Date.now(), keyword);
  }, [keyword]);

  const btnHandler = () => {
    setKeyword(value);
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
        name="keyword"
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
