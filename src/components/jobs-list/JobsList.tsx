import { useEffect, useReducer, useState } from 'react';
import EmptyItemComponent from '../empty-item/EmptyItem';
import FilterComponent from '../filter/Filter';
import KeywordInputComponent from '../keyword-input/KeywordInput';
import ListItemComponent from '../list-item/ListItem';
import { Vacancy } from '../../types/vacancy';
import { checkToken } from '../../pages/root-loader';
import { getVacancies } from '../../services/api';
import { VacanciesResponse } from '../../types/response';
import { mapVacanciesResponse } from '../../services/utils';
import { SearchState, initState, reducer } from './jobs-list-reducer';
import './jobs-list.css';

const updateVacancies = async (
  state: SearchState,
  setList: React.Dispatch<React.SetStateAction<Vacancy[]>>
) => {
  const tokenInfo = await checkToken();

  const response = await getVacancies(tokenInfo.accessToken, {
    catalogues: state.catalog,
    keyword: state.keyword,
  });

  if (!response.ok) {
    throw response;
  }

  const data = (await response.json()) as VacanciesResponse;
  setList(mapVacanciesResponse(data));
};

const JobsListComponent: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const [vacanciesList, setVacanciesList] = useState<Vacancy[]>([]);

  useEffect(() => {
    document.title = 'Поиск Вакансий';
    updateVacancies(state, setVacanciesList);
  }, [state]);

  if (vacanciesList.length) {
    return (
      <main className="main-list">
        <div className="jobs-list-grid">
          <FilterComponent />
          <div className="list-container">
            <KeywordInputComponent onSearch={dispatch} />
            <ul className="list-container">
              {vacanciesList.map((v) => (
                <ListItemComponent key={v.id} {...v} isAlone={false} />
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
          <KeywordInputComponent onSearch={dispatch} />
          <div className="list-container">
            <EmptyItemComponent />
          </div>
        </div>
      </div>
    </main>
  );
};

export default JobsListComponent;
