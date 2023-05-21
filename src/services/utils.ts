import { AccessTokenInfo } from '../types/token';
import { Vacancy } from '../types/vacancy';
import {
  AccessTokenResponse,
  VacanciesResponse,
  VacancyResponse,
} from '../types/response';

export const mapAccessTokenResponse = (res: AccessTokenResponse): AccessTokenInfo => ({
  accessToken: res.access_token,
  refreshToken: res.refresh_token,
  ttl: res.ttl * 1000,
  expiresIn: res.expires_in,
  tokenType: res.token_type,
});

export const mapVacancyResponse = (res: VacancyResponse): Vacancy => ({
  id: res.id,
  profession: res.profession,
  firmName: res.firm_name,
  paymentFrom: res.payment_from,
  paymentTo: res.payment_to,
  currency: res.currency,
  typeOfWork: res.type_of_work.title,
  location: res.town.title,
  description: res.vacancyRichText,
});

export const mapVacanciesResponse = (res: VacanciesResponse): Vacancy[] =>
  res.objects.map((v) => mapVacancyResponse(v));
