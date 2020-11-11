import axios from 'axios';
import {
    GET_CHAMPIONS,
    ERROR
} from './types';

const championListURLBACKUP = 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json';
const patchURL = 'https://ddragon.leagueoflegends.com/api/versions.json';

export const getChampions = () => async dispatch => {
    try {
        const currentPatch = (await axios.get(patchURL))?.data[0];
        let championData = '';
        if (currentPatch) {
          championData = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${currentPatch}/data/en_US/champion.json`);
        }
        else championData = championListURLBACKUP;
    
        //data of all champions
        const championInfo = championData.data.data;
    
        const listOfChampions = [];
        for (var champion in championInfo) {
          listOfChampions.push(champion)
          //listOfChampions.push({ [champion]: championInfo[champion].key});
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
            payload: { msg: error.response.statusText, status: error.response.status }
        });
      }





}