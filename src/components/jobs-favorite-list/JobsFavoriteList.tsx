import { getVacanciesList } from '../../MOCK_DATA';
import { getFavoriteItems } from '../../services/favItem';
import ListItemComponent from '../list-item/ListItem';

const JobsFavoriteListComponent = () => {
  const favoriteItems = getFavoriteItems();

  const vacanciesList = getVacanciesList().filter((v) => favoriteItems.includes(v.id));

  return (
    <main className="main-list">
      <ul className="list-container">
        {vacanciesList.length > 0 &&
          vacanciesList.map((v) => <ListItemComponent key={v.id} {...v} />)}
      </ul>
    </main>
  );
};

export default JobsFavoriteListComponent;
