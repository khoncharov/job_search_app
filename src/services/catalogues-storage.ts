import { Catalog } from '../types/vacancy';

const CATALOG_ITEMS = 'catalog-items';

export const getCatalogItems = (): Catalog[] => {
  const storage = JSON.parse(sessionStorage.getItem(CATALOG_ITEMS) ?? '[]');
  return storage as Catalog[];
};

export const isCataloguesLoaded = () => Boolean(sessionStorage.getItem(CATALOG_ITEMS));

export const setCatalogItems = (array: Catalog[]): void => {
  sessionStorage.setItem(CATALOG_ITEMS, JSON.stringify(array));
};
