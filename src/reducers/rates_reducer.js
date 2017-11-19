import { FETCH_FX_RATES } from '../actions';


const INITIAL_STATE = [];


export default function(state = INITIAL_STATE, action) {
   
    switch(action.type) {
        case FETCH_FX_RATES:
            return action.payload;


        default:
            return state;
    }
}