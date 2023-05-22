import { LoaderFunction } from 'react-router-dom';
import { isCataloguesLoaded, setCatalogItems } from '../../services/catalogues-storage';
import { getCatalogues } from '../../services/api';
import { CatalogResponse } from '../../types/response';
import { mapCatalogResponse } from '../../services/utils';

const jobsListLoader: LoaderFunction = async () => {
  if (!isCataloguesLoaded()) {
    const response = await getCatalogues();

    if (!response.ok) {
      throw response;
    }

    const data = (await response.json()) as CatalogResponse[];
    setCatalogItems(mapCatalogResponse(data));
  }

  return null;
};

export default jobsListLoader;
