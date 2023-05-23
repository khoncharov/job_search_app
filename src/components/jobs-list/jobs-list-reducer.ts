import { DEFAULT_CATALOG } from '../../const';

export enum SearchBy {
  KEYWORD = 'keyword',
  FILTER = 'filter',
}

export interface SearchAction {
  type: SearchBy;
  payload: string | FilterState;
}

export interface FilterState {
  catalog: string;
  paymentFrom: number | '';
  paymentTo: number | '';
}

export interface SearchState {
  keyword: string;
  filter: FilterState;
}

const keyWordInitState = '';

const filterInitState: FilterState = {
  catalog: DEFAULT_CATALOG.toString(),
  paymentFrom: '',
  paymentTo: '',
};

export const initState = {
  keyword: keyWordInitState,
  filter: filterInitState,
};

export const reducer = (state: SearchState, action: SearchAction) => {
  switch (action.type) {
    case SearchBy.KEYWORD: {
      if (typeof action.payload === 'string' && state.keyword !== action.payload) {
        return { ...state, keyword: action.payload };
      }
      return state;
    }
    case SearchBy.FILTER: {
      if (
        typeof action.payload !== 'string' &&
        (state.filter.catalog !== action.payload.catalog ||
          state.filter.paymentFrom !== action.payload.paymentFrom ||
          state.filter.paymentTo !== action.payload.paymentTo)
      ) {
        return { ...state, filter: action.payload };
      }
      return state;
    }
    default:
      throw new Error('Unknown action type.');
  }
};
