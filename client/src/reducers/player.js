import {
    GET_PLAYER,
    ERROR
} from '../actions/types';

const initialState = {
    player: [],
    loading: true,
    error: {}
};

export default function playerReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYER:
            return {
                ...state,
                player: payload,
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