import { getVacanciesList } from '../../MOCK_DATA';
import FilterComponent from '../filter/Filter';
import KeywordInputComponent from '../keyword-input/KeywordInput';
import ListItemComponent from '../list-item/ListItem';

const JobsListComponent = () => {
  const vacanciesList = getVacanciesList();

  return (
    <main className="main-list">
      <FilterComponent />
      <div className="list-container">
        <KeywordInputComponent />
        <ul className="list-container">
          {vacanciesList.length > 0 &&
            vacanciesList.map((v) => <ListItemComponent key={v.id} {...v} />)}
        </ul>
      </div>
    </main>
  );
};

export default JobsListComponent;
