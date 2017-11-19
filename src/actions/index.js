require('es6-promise').polyfill();
import axios from 'axios';

export const fx = require('money');


export const REQ_HAS_ERRORED = 'REQ_HAS_ERRORED';
export const REQ_IS_LOADING = 'REQ_IS_LOADING';
export const REQ_DATA_SUCCESS = 'REQ_DATA_SUCCESS';

export const FETCH_FX_RATES = 'FETCH_FX_RATES';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const CHANGE_CONVERT_CURRENCY = 'CHANGE_CONVERT_CURRENCY';


//я так понимаю они будут браться откуда то с сервера
//но хардкожу их в виде константы
export const AVAILABLE_CURRENCIES = [ 'USD', 'GBP', 'EUR'];



export const APP_ID = 'ccdef41a5462446fba81dfe67d50c91d';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 90000; //90 секунд
//axios.defaults.baseURL = 'https://openexchangerates.org/api/latest.json';



export function fetchFXRates(base) {
    console.log("action fetchFXRates", base);
    return (dispatch) => {
        let currencies = AVAILABLE_CURRENCIES.join();
        axios.get(`https://openexchangerates.org/api/latest.json?app_id=${APP_ID}&base=${base}&symbols=${currencies}`)
            .then((response) => {
              console.log(response.data.rates);
              fx.base = "USD";
              fx.rates = response.data.rates;
              //console.log("fx", fx.convert(1, {from: "GBP", to: "USD"}));
              dispatch({ type: FETCH_FX_RATES, payload: response.data.rates })
            })
            .catch((error) => {
                console.warn(error);
            });
    };
}


export function changeWallet(wallet) {
    console.log("action fetchFXRates", wallet);
    return { type: CHANGE_WALLET, payload: wallet }
}

export function changeConvertion(convertion) {
    console.log("action changeConvertToCurrency", convertion);
    return { type: CHANGE_CONVERT_CURRENCY, payload: convertion }
}
