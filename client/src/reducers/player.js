import {
    GET_PLAYER,
    ERROR
} from '../actions/types';

const initialState = {
    playerInfo: [],
    loading: true,
    error: {}
};

export default function playerReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYER:
            return {
                ...state,
                playerInfo: payload,
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