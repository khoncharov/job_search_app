import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ListItemComponent from '../list-item/ListItem';
import DescriptionItemComponent from './description/Description';
import { Vacancy } from '../../types/vacancy';

const JobDetailsComponent = () => {
  const v = useLoaderData() as Vacancy | null;

  useEffect(() => {
    document.title = `Вакансия ${v ? v.profession : 'не найдена'}`;
    window.scrollTo(0, 0);
  }, [v]);

  return (
    <main className="main-list">
      <ul className="list-container">
        {v ? (
          <>
            <ListItemComponent key={1} {...v} isAlone={true} />
            <DescriptionItemComponent key={2} content={v.description} />
          </>
        ) : (
          ''
        )}
      </ul>
    </main>
  );
};

export default JobDetailsComponent;
