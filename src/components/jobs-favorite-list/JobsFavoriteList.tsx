import { getVacanciesList } from '../../MOCK_DATA';
import ListItemComponent from '../list-item/ListItem';

const JobsFavoriteListComponent = () => {
  const vacanciesList = getVacanciesList();

  return (
    <main className="main-list">
      {/* <ul className="list-container">
          {vacanciesList.length > 0 &&
            vacanciesList.map((v) => <ListItemComponent key={v.id} {...v} />)}
        </ul> */}
    </main>
  );
};

export default JobsFavoriteListComponent;
