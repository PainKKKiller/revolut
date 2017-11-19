import { combineReducers } from 'redux';

import RatesReducer from './rates_reducer';
import WalletReducer from './wallet_reducer';
import ConversionReducer from './conversion_reducer';


const rootReducer = combineReducers({
    rates: RatesReducer,
    wallet: WalletReducer,
    conversion: ConversionReducer
});


export default rootReducer;
