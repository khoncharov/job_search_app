const FAVORITE_ITEMS = 'favorite-items';

export const getFavoriteItems = (): number[] => {
  const storage = JSON.parse(localStorage.getItem(FAVORITE_ITEMS) ?? '[]');

  if (Array.isArray(storage) && storage.every((i) => Number.isInteger(i))) {
    return storage;
  }
  return [];
};

export const isFavoriteItem = (itemId: number): boolean =>
  getFavoriteItems().includes(itemId);

export const setFavoriteItem = (itemId: number, isFavorite: boolean): void => {
  let storage = getFavoriteItems();

  if (isFavorite) {
    storage.push(itemId);
  } else {
    storage = storage.filter((i) => i !== itemId);
  }

  localStorage.setItem(FAVORITE_ITEMS, JSON.stringify(storage));
};
