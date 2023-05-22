import { useEffect } from 'react';
import EmptyItemComponent from '../empty-item/EmptyItem';
import ListItemComponent from '../list-item/ListItem';
import { useLoaderData } from 'react-router-dom';
import { Vacancy } from '../../types/vacancy';

const JobsFavoriteListComponent: React.FC = () => {
  useEffect(() => {
    document.title = 'Избранное';
  }, []);

  const vacanciesList = useLoaderData() as Vacancy[];

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
