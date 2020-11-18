import {
    GET_CHAMPIONS,
    ERROR
} from '../actions/types';

const initialState = {
    champions: [],
    loading: true,
    error: {}
};

export default function championReducer(state = initialState, action) {
    //console.log('action: ', action)
    const { type, payload } = action;
    
    switch (type) {
        case GET_CHAMPIONS:
            //console.log('GET_CHAMPIONS HIT')
            return {
                ...state,
                champions: payload,
                loading: false
            }
        case ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
        
    }
}