const API_ORIGIN = 'https://startup-summer-proxy-production.up.railway.app';

const API_ENDPOINT = {
  accessToken: `${API_ORIGIN}/2.0/oauth2/password/`,
  refreshToken: `${API_ORIGIN}/2.0/oauth2/refresh_token/`,
  catalogues: `${API_ORIGIN}/2.0/catalogues/`,
  vacancies: `${API_ORIGIN}/2.0/vacancies/`,
} as const;

const commonHeaders = {
  'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
  'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
};

export const getAccessToken = async () => {
  const searchParams = new URLSearchParams();
  searchParams.append('login', import.meta.env.VITE_AUTH_LOGIN);
  searchParams.append('password', import.meta.env.VITE_AUTH_PASSWORD);
  searchParams.append('client_id', import.meta.env.VITE_CLIENT_ID);
  searchParams.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  searchParams.append('hr', import.meta.env.VITE_HR);

  const response = await fetch(`${API_ENDPOINT.accessToken}?${searchParams.toString()}`, {
    headers: commonHeaders,
  });

  return response;
};

export const refreshAccessToken = async (refreshToken: string) => {
  const searchParams = new URLSearchParams();
  searchParams.append('refresh_token', refreshToken);
  searchParams.append('client_id', import.meta.env.VITE_CLIENT_ID);
  searchParams.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);

  const response = await fetch(
    `${API_ENDPOINT.refreshToken}?${searchParams.toString()}`,
    {
      headers: commonHeaders,
    }
  );

  return response;
};

export const getCatalogues = async () => {
  const response = await fetch(API_ENDPOINT.catalogues, {
    headers: commonHeaders,
  });

  return response;
};

export const getVacancies = async (
  token: string,
  params: {
    catalogues: number;
    published: number;
    keyword?: string;
    paymentFrom?: number;
    paymentTo?: number;
  }
) => {
  const searchParams = new URLSearchParams();
  searchParams.append('catalogues', params.catalogues.toString());
  searchParams.append('published', params.published.toString());

  const response = await fetch(`${API_ENDPOINT.vacancies}?${searchParams.toString()}`, {
    headers: {
      ...commonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getFavVacancies = async (token: string, ids: number[]) => {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => {
    searchParams.append('ids[]', id.toString());
  });

  const response = await fetch(`${API_ENDPOINT.vacancies}?${searchParams.toString()}`, {
    headers: {
      ...commonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getVacancy = async (token: string, jobId: string) => {
  const response = await fetch(`${API_ENDPOINT.vacancies}${jobId}/`, {
    headers: {
      ...commonHeaders,
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
