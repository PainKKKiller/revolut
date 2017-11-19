import { CHANGE_WALLET } from '../actions';


const INITIAL_STATE = { EUR: 100, USD: 90, GBP: 80 };


export default function(state = INITIAL_STATE, action) {
 
    switch(action.type) {
        case CHANGE_WALLET:
            return action.payload;


        default:
            return state;
    }
}