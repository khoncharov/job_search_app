import { LoaderFunction } from 'react-router-dom';
import { getFavoriteItems } from '../../services/favItem';
import { getFavVacancies } from '../../services/api';
import { checkToken } from '../../pages/root-loader';
import { VacanciesResponse } from '../../types/response';
import { mapVacanciesResponse } from '../../services/utils';

const jobFavoriteLoader: LoaderFunction = async () => {
  const favoriteItems = getFavoriteItems();

  if (favoriteItems.length) {
    const tokenInfo = await checkToken();
    const response = await getFavVacancies(tokenInfo.accessToken, favoriteItems);

    if (!response.ok) {
      throw response;
    }

    const data = (await response.json()) as VacanciesResponse;
    return mapVacanciesResponse(data);
  }

  return [];
};

export default jobFavoriteLoader;
