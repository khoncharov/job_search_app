import { AccessTokenInfo } from '../types/token';
import { Catalog, Vacancy } from '../types/vacancy';
import {
  AccessTokenResponse,
  CatalogResponse,
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

export const mapCatalogResponse = (res: CatalogResponse[]): Catalog[] =>
  res.map((i) => ({
    key: i.key,
    title: i.title,
  }));

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

export const isExpiredToken = (tokenInfo: AccessTokenInfo): boolean => {
  const HALF_HOUR = 1000 * 60 * 30;
  return Date.now() + HALF_HOUR > tokenInfo.ttl;
};
