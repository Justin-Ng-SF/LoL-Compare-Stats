import axios from 'axios';
import {
    GET_PLAYER,
    ERROR
} from './types';

export const getPlayer = (username, championID) => async dispatch => {
    try {
        const dataInfo = await axios.get(`/api/player/${username}/${championID}`);
        // /console.log(dataInfo)

        dispatch({
            type: GET_PLAYER,
            payload: dataInfo
        })
    } catch (error) {
        console.error(error.message);
        // return res.status(404).json({ msg: 'error 404' });
        dispatch({
            type: ERROR,
            payload: { msg: error.message }
        });
    }
}

