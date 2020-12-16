import React from 'react';
import {useSelector} from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {ACTIONS_TYPE, useDispatch,} from '../../redux/actions';
import {selectState} from "../../redux/selectors";


const CurrencyEContainer: React.FunctionComponent = () => {

    let dispatch = useDispatch()

    const {currencies, currentCurrency, isBuying, amountOfBYN, amountOfCurrency} = useSelector(selectState)

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value);
        if (!isFinite(value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === 0) {
                    dispatch({
                        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
                        payload: {amountOfBYN: value, amountOfCurrency: value}
                    });
                } else {
                    dispatch(
                        {
                            type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
                            payload: {
                                amountOfBYN: value,
                                amountOfCurrency: Number((value / currencyRate).toFixed(2))
                            }
                        }
                    )
                }
            } else {
                if (value === 0) {
                    dispatch(
                        {
                            type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
                            payload: {amountOfBYN: value, amountOfCurrency: value}
                        }
                    );
                } else {
                    dispatch(
                        {
                            type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
                            payload: {
                                amountOfBYN: Number((value * currencyRate).toFixed(2)),
                                amountOfCurrency: value
                            }
                        }
                    );
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch({
            type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
            payload: {isBuying: true}
        }) : dispatch({type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload: {isBuying: false}});
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch({
            type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
            payload: {currentCurrency: e.currentTarget.dataset.currency}
        });
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};



export default CurrencyEContainer
