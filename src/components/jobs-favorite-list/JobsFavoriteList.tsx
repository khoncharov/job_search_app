import { useEffect } from 'react';
import { getVacanciesList } from '../../MOCK_DATA';
import { getFavoriteItems } from '../../services/favItem';
import EmptyItemComponent from '../empty-item/EmptyItem';
import ListItemComponent from '../list-item/ListItem';

const JobsFavoriteListComponent = () => {
  useEffect(() => {
    document.title = `Избранное`;
  });

  const favoriteItems = getFavoriteItems();

  const vacanciesList = getVacanciesList().filter((v) => favoriteItems.includes(v.id));

  if (vacanciesList.length) {
    return (
      <main className="main-list">
        <ul className="list-container">
          {vacanciesList.map((v) => (
            <ListItemComponent key={v.id} {...v} isAlone={false} />
          ))}
        </ul>
      </main>
    );
  }

  return (
    <main className="main-list">
      <div className="list-container">
        <EmptyItemComponent />
      </div>
    </main>
  );
};

export default JobsFavoriteListComponent;
