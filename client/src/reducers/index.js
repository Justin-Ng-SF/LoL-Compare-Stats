import { combineReducers } from 'redux';
import champions from './champions'
import player from './player'

export default combineReducers({
    champions, 
    player
});