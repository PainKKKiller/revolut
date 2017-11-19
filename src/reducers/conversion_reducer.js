import { CHANGE_CONVERT_CURRENCY } from '../actions';


const INITIAL_STATE = { from: 'USD', to: 'EUR', sum: 0 };


export default function(state = INITIAL_STATE, action) {
    
    switch(action.type) {
        case CHANGE_CONVERT_CURRENCY:
            return action.payload;


        default:
            return state;
    }
}