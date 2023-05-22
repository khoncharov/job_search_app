import { LoaderFunction } from 'react-router-dom';
import { isCataloguesLoaded, setCatalogItems } from '../../services/catalogues-storage';
import { getCatalogues, getVacancies } from '../../services/api';
import { CatalogResponse, VacanciesResponse } from '../../types/response';
import { mapCatalogResponse, mapVacanciesResponse } from '../../services/utils';
import { checkToken } from '../../pages/root-loader';

const jobsListLoader: LoaderFunction = async () => {
  if (!isCataloguesLoaded()) {
    const response = await getCatalogues();

    if (!response.ok) {
      throw response;
    }

    const data = (await response.json()) as CatalogResponse[];
    setCatalogItems(mapCatalogResponse(data));
  }

  const tokenInfo = await checkToken();
  const response = await getVacancies(tokenInfo.accessToken, { catalogues: 33 });

  if (!response.ok) {
    throw response;
  }

  const data = (await response.json()) as VacanciesResponse;
  return mapVacanciesResponse(data);
};

export default jobsListLoader;
