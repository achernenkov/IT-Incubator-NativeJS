import {IGlobalState} from './state'

interface IRootStat extends IGlobalState {
}

export const selectCurrencies = (state: IRootStat) => state.currency.currencies
export const selectUrrentCurrency = (state: IRootStat) => state.currency.currentCurrency
export const selectIsBuying = (state: IRootStat) => state.currency.isBuying
export const selectAmountOfBYN = (state: IRootStat) => state.currency.amountOfBYN
export const selectAmountOfCurrency = (state: IRootStat) => state.currency.amountOfCurrency

export const selectState = (state: IRootStat) => state.currency
