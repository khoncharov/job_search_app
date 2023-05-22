import {
  ActionFunctionArgs,
  LoaderFunction,
  ParamParseKey,
  Params,
} from 'react-router-dom';
import { getVacancy } from '../../services/api';
import { VacancyResponse } from '../../types/response';
import { mapVacancyResponse } from '../../services/utils';
import { checkToken } from '../../pages/root-loader';

const PathNames = {
  jobDetail: '/:id',
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.jobDetail>>;
}

const jobDetailsLoader: LoaderFunction = async ({ params }: Args) => {
  if (params.id) {
    const tokenInfo = await checkToken();
    const response = await getVacancy(params.id, tokenInfo.accessToken);

    if (!response.ok) {
      throw response;
    }

    const data = (await response.json()) as VacancyResponse;
    return mapVacancyResponse(data);
  }

  return null;
};

export default jobDetailsLoader;
