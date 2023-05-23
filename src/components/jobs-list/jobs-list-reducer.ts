import { DEFAULT_CATALOG, DEFAULT_PAYMENT_FROM, DEFAULT_PAYMENT_TO } from '../../const';

export enum SearchBy {
  KEYWORD = 'keyword',
  CATALOG = 'catalog',
  PAYMENT_FROM = 'payment_from',
  PAYMENT_TO = 'payment_to',
}

export interface SearchAction {
  type: SearchBy;
  payload: string;
}

export interface SearchState {
  keyword: string;
  catalog: number;
  paymentFrom: number;
  paymentTo: number;
}

export const initState = {
  keyword: '',
  catalog: DEFAULT_CATALOG,
  paymentFrom: DEFAULT_PAYMENT_FROM,
  paymentTo: DEFAULT_PAYMENT_TO,
};

export const reducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case 'keyword': {
      if (state.keyword !== action.payload) {
        return { ...state, keyword: action.payload };
      }
      return state;
    }
    default:
      throw new Error('Unknown action type.');
  }
};
