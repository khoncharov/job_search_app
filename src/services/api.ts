const API_ORIGIN = 'https://startup-summer-proxy-production.up.railway.app';

const API_ENDPOINT = {
  accessToken: `${API_ORIGIN}/2.0/oauth2/password/`,
  refreshToken: `${API_ORIGIN}/2.0/oauth2/refresh_token/`,
  catalogues: `${API_ORIGIN}/2.0/catalogues/`,
  vacancies: `${API_ORIGIN}/2.0/vacancies/`,
} as const;

export const getAccessToken = async () => {
  const searchParams = new URLSearchParams();
  searchParams.append('login', import.meta.env.VITE_AUTH_LOGIN);
  searchParams.append('password', import.meta.env.VITE_AUTH_PASSWORD);
  searchParams.append('client_id', import.meta.env.VITE_CLIENT_ID);
  searchParams.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  searchParams.append('hr', import.meta.env.VITE_HR);

  const response = await fetch(`${API_ENDPOINT.accessToken}?${searchParams.toString()}`, {
    headers: {
      'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
      'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
    },
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
      headers: {
        'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
        'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
      },
    }
  );

  return response;
};

// export const getCatalogues = async () => {
//   const response = await fetch(API_ENDPOINT.catalogues, {
//     headers: {
//       'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
//       'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
//     },
//   });

//   if (!response.ok) {
//     const data = (await response.json()) as CustomErrorResponse;
//     throw { message: data.error.message, status: data.error.code };
//   }

//   const data = (await response.json()) as Catalog[];
//   return data;
// };

/* [ keyword, payment from to, domain id ] */

export const getFavVacancies = async (token: string, ids: number[]) => {
  const searchParams = new URLSearchParams();
  ids.forEach((id) => {
    searchParams.append('ids[]', id.toString());
  });

  const response = await fetch(`${API_ENDPOINT.vacancies}?${searchParams.toString()}`, {
    headers: {
      'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
      'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const getVacancy = async (token: string, jobId: string) => {
  const response = await fetch(`${API_ENDPOINT.vacancies}${jobId}/`, {
    headers: {
      'X-Secret-Key': import.meta.env.VITE_X_SECRET_KEY,
      'X-Api-App-Id': import.meta.env.VITE_CLIENT_SECRET,
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
