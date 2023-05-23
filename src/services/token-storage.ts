import { AccessTokenInfo } from '../types/token';

const TOKEN_ITEM = 'token-info';

export const saveTokenInfo = (tokenInfo: AccessTokenInfo) => {
  localStorage.setItem(TOKEN_ITEM, JSON.stringify(tokenInfo));
};

export const deleteTokenInfo = () => {
  localStorage.removeItem(TOKEN_ITEM);
};

export const getTokenInfo = (): AccessTokenInfo | null => {
  const value = JSON.parse(localStorage.getItem(TOKEN_ITEM) ?? '{}');

  if (
    value.accessToken !== undefined &&
    value.refreshToken !== undefined &&
    value.ttl !== undefined &&
    value.expiresIn !== undefined &&
    value.tokenType !== undefined
  ) {
    return value as AccessTokenInfo;
  }

  return null;
};
