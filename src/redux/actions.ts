import {useDispatch as _useDispatch} from 'react-redux';

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload: {
        amountOfBYN: string
        amountOfCurrency: string
    }
};


export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    payload: {
        isBuying: boolean
    }
};


export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    payload: {
        currentCurrency: string
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;

export function useDispatch() {
    const dispatch = _useDispatch();
    return (ac: CurrencyReducersTypes) => {
        dispatch(ac);
    }
}