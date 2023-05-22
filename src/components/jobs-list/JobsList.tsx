import { useEffect, useState } from 'react';
import { getVacanciesList } from '../../MOCK_DATA';
import EmptyItemComponent from '../empty-item/EmptyItem';
import FilterComponent from '../filter/Filter';
import KeywordInputComponent from '../keyword-input/KeywordInput';
import ListItemComponent from '../list-item/ListItem';
import './jobs-list.css';

const JobsListComponent: React.FC = () => {
  // const [catalog, setCatalog] = useState<number>(33);
  // const [keyword, setKeyword] = useState<string>('');
  // const [paymentFrom, setPaymentFrom] = useState<number>(0);
  // const [paymentTo, setPaymentTo] = useState<number>(0);

  useEffect(() => {
    document.title = 'Поиск Вакансий';
  }, []);

  const vacanciesList = getVacanciesList();

  if (vacanciesList.length) {
    return (
      <main className="main-list">
        <div className="jobs-list-grid">
          <FilterComponent />
          <div className="list-container">
            <KeywordInputComponent />
            <ul className="list-container">
              {vacanciesList.map((v) => (
                <ListItemComponent key={v.id} {...v} isAlone={false} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main-list">
      <div className="jobs-list-grid">
        <FilterComponent />
        <div className="list-container">
          <KeywordInputComponent />
          <div className="list-container">
            <EmptyItemComponent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobsListComponent;
