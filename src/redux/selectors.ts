import {IGlobalState} from './state'

interface IRootStat extends IGlobalState {
}

export const selectState = (state: IRootStat) => state.currency
