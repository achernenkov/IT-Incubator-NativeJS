import React from 'react';
import {connect} from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {IGlobalState} from '../../redux/state';
import {CurrencyState} from '../../redux/currencyReducer';
import {compose} from 'redux';
import {ACTIONS_TYPE, useDispatch,} from '../../redux/actions';


const CurrencyEContainer: React.FunctionComponent<CurrencyState> = ({
                                                                        currencies,
                                                                        currentCurrency,
                                                                        isBuying,
                                                                        amountOfBYN,
                                                                        amountOfCurrency,
                                                                    }) => {

    let dispatch = useDispatch()

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
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
                                amountOfCurrency: (+Number(value).toFixed(2) / currencyRate).toFixed(2)
                            }
                        }
                    )
                }
            } else {
                if (value === '') {
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
                                amountOfBYN: (+Number(value).toFixed(2) * currencyRate).toFixed(2),
                                amountOfCurrency: value
                            }
                        }
                    );
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy' ? dispatch({type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload: {isBuying: true}}) : dispatch({type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload: {isBuying: false}});
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch({type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, payload: {currentCurrency: e.currentTarget.dataset.currency}});
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

const mapStateToProps = (state: IGlobalState) => {
    return {
        currencies: state.currency.currencies,
        currentCurrency: state.currency.currentCurrency,
        isBuying: state.currency.isBuying,
        amountOfBYN: state.currency.amountOfBYN,
        amountOfCurrency: state.currency.amountOfCurrency,
    };
};


export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {}))(CurrencyEContainer);
