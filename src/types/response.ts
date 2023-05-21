import { Catalog } from './vacancy';

export interface AccessTokenResponse {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
}

export interface ErrorResponse {
  error: {
    code: number;
    message: string;
  };
}

export type CatalogResponse = Catalog;

interface Town {
  title: string;
}

interface TypeOfWork {
  title: string;
}

export interface VacancyResponse {
  id: number;
  profession: string;
  firm_name: string;
  payment_from: number;
  payment_to: number;
  currency: string;
  type_of_work: TypeOfWork;
  town: Town;
  vacancyRichText: string;
}

export interface VacanciesResponse {
  objects: VacancyResponse[];
}
