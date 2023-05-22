import { getAccessToken, refreshAccessToken } from '../services/api';
import { deleteTokenInfo, getTokenInfo, saveTokenInfo } from '../services/token-storage';
import { isExpiredToken, mapAccessTokenResponse } from '../services/utils';
import { AccessTokenResponse } from '../types/response';
import { AccessTokenInfo } from '../types/token';

export const checkToken = async (): Promise<AccessTokenInfo> => {
  const tokenInfo = getTokenInfo();

  if (!tokenInfo) {
    const response = await getAccessToken();

    if (!response.ok) {
      throw response;
    }

    const data = (await response.json()) as AccessTokenResponse;
    const newTokenInfo = mapAccessTokenResponse(data);
    saveTokenInfo(newTokenInfo);
    return newTokenInfo;
  }

  if (isExpiredToken(tokenInfo)) {
    const response = await refreshAccessToken(tokenInfo.refreshToken);

    if (!response.ok) {
      deleteTokenInfo();
      throw new Error('Invalid refresh token');
    }

    const data = (await response.json()) as AccessTokenResponse;
    const newTokenInfo = mapAccessTokenResponse(data);
    saveTokenInfo(newTokenInfo);
    return newTokenInfo;
  }

  return tokenInfo;
};

export const rootLoader = async () => {
  await checkToken();
  return null;
};
