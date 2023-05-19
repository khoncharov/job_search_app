import { getVacanciesList } from '../../MOCK_DATA';
import { getFavoriteItems } from '../../services/favItem';
import EmptyItemComponent from '../empty-item/EmptyItem';
import ListItemComponent from '../list-item/ListItem';

const JobsFavoriteListComponent = () => {
  const favoriteItems = getFavoriteItems();

  const vacanciesList = getVacanciesList().filter((v) => favoriteItems.includes(v.id));

  return (
    <main className="main-list">
      {vacanciesList.length ? (
        vacanciesList.map((v) => (
          <ul className="list-container">
            <ListItemComponent key={v.id} {...v} />
          </ul>
        ))
      ) : (
        <div className="list-container">
          <EmptyItemComponent />
        </div>
      )}
    </main>
  );
};

export default JobsFavoriteListComponent;
