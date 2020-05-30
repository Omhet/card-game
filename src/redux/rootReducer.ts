import { combineReducers } from 'redux';
import { game } from './modules/game';
import { connection } from './modules/connection';

export const rootReducer = combineReducers({
  game,
  connection
});
