import { getVacanciesList } from '../../MOCK_DATA';
import EmptyItemComponent from '../empty-item/EmptyItem';
import FilterComponent from '../filter/Filter';
import KeywordInputComponent from '../keyword-input/KeywordInput';
import ListItemComponent from '../list-item/ListItem';
import './jobs-list.css';

const JobsListComponent = () => {
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
                <ListItemComponent key={v.id} {...v} />
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
