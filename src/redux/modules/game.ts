import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Action } from '../types';
import { Players, Player } from '../../types/player';
import { Cards } from '../../types/card';

const fsa = {
  hideStartScreen: createAction('[GAME] HIDE START SCREEN')(),
  setPlayers: createAction('[GAME] SET PLAYERS')<Players>(),
  addPlayer: createAction('[GAME] ADD PLAYER')<Player>(),
  setHand: createAction('[GAME] SET HAND')<Cards>(),
};
export const gameFsa = fsa;

interface State {
  isStartScreenShown: boolean;
  players: Players;
  hand: Cards;
}

const initialState: State = {
  isStartScreenShown: true,
  players: [],
  hand: [],
};

export const game = withState(initialState)
  .add(fsa.hideStartScreen, (state) => ({
    ...state,
    isStartScreenShown: false
  }))
  .add(fsa.setPlayers, (state, { payload }) => ({
    ...state,
    players: payload
  }))
  .add(fsa.addPlayer, (state, { payload }) => ({
    ...state,
    players: [...state.players, payload]
  }))
  .add(fsa.setHand, (state, { payload }) => ({
    ...state,
    hand: payload
  }))

export const startGame = (name: string): Action => async (dispatch, getState, invoke) => {
  await invoke('OnNewGamerJoin', name);
  dispatch(gameFsa.hideStartScreen());
};
