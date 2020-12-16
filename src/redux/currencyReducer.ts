import { ACTIONS_TYPE, CurrencyReducersTypes } from './actions';

type CurrencyType = {
  currencyName: string;
  buyRate: number;
  sellRate: number;
};
export type CurrencyState = {
  currencies: Array<CurrencyType>;
  currentCurrency: string;
  isBuying: boolean;
  amountOfBYN: number;
  amountOfCurrency: number;
};

const initialState: CurrencyState = {
  currencies: [
    {
      currencyName: 'USD',
      buyRate: 2.62,
      sellRate: 2.58,
    },
    {
      currencyName: 'EUR',
      buyRate: 3.1,
      sellRate: 3.06,
    },
    {
      currencyName: 'RUR',
      buyRate: 0.0345,
      sellRate: 0.0341,
    },
  ],
  currentCurrency: 'USD',
  isBuying: true,
  amountOfBYN: 0.0,
  amountOfCurrency: 0.0,
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
  debugger
  switch (action.type) {
    case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
      return {...state, ...action.payload}
    case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
      return {...state, ...action.payload, amountOfCurrency: 0, amountOfBYN: 0}
    case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
      return {...state, ...action.payload, amountOfCurrency: 0, amountOfBYN: 0}
    default:
      return state;
  }
};