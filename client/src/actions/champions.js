import axios from 'axios';
import {
    GET_CHAMPIONS,
    ERROR
} from './types';
import {
    championListURL1,
    championListURL2,
    championListURLBACKUP,
    patchURL,

} from '../resources/urls';

export const getChampions = () => async dispatch => {
    try {
        const currentPatch = (await axios.get(patchURL))?.data[0];
        const championListURL = championListURL1 + currentPatch + championListURL2;
        let championData = '';
        if (currentPatch) {
          championData = await axios.get(championListURL);
        }
        else championData = await axios.get(championListURLBACKUP);
    
        //data of all champions
        const championInfo = championData.data.data;
    
        const listOfChampions = [];
        for (var champion in championInfo) {
          //listOfChampions.push(champion)
          listOfChampions.push({ [champion]: championInfo[champion].key});
        }
    
        // console.log(typeof listOfChampions)
        // res.send(listOfChampions);
        dispatch({
            type: GET_CHAMPIONS,
            payload: listOfChampions
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