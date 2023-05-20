import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { getVacanciesList } from '../../MOCK_DATA';
import ListItemComponent from '../list-item/ListItem';
import EmptyItemComponent from '../empty-item/EmptyItem';
import DescriptionItemComponent from './description/Description';
import CardItem from '../../types/card-item';
import './job-details.css';

const JobDetailsComponent = () => {
  const vacanciesList = getVacanciesList();

  const match = useMatches();
  const id = match[0].params.id;

  let v: CardItem | undefined;
  if (id && Number.isInteger(+id)) {
    v = vacanciesList.find((v) => {
      console.log(v.id, id);

      return v.id === Number(id);
    });
  }

  useEffect(() => {
    document.title = `Вакансия ${v ? v.profession : 'не найдена'}`;
    window.scrollTo(0, 0);
  });

  return (
    <main className="main-list">
      <ul className="list-container">
        {v ? (
          <>
            <ListItemComponent key={1} {...v} />
            <DescriptionItemComponent key={2} content={v.description} />
          </>
        ) : (
          <EmptyItemComponent />
        )}
      </ul>
    </main>
  );
};

export default JobDetailsComponent;
