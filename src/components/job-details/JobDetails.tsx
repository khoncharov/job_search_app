import { useMatches } from 'react-router-dom';
import { getVacanciesList } from '../../MOCK_DATA';
import ListItemComponent from '../list-item/ListItem';
import EmptyItemComponent from '../empty-item/EmptyItem';
import DescriptionItemComponent from './description/Description';
import './job-details.css';

const JobDetailsComponent = () => {
  const vacanciesList = getVacanciesList();

  const match = useMatches();
  const id = match[0].params.id;

  let v;
  if (id && Number.isInteger(+id)) {
    v = vacanciesList.find((v) => {
      console.log(v.id, id);

      return v.id === Number(id);
    });
  }

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
