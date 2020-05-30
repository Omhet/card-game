import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Action } from '../types';
import { Players, Player } from '../../types/player';

const fsa = {
  hideStartScreen: createAction('[GAME] HIDE START SCREEN')(),
  setPlayers: createAction('[GAME] SET PLAYERS')<Players>(),
  addPlayer: createAction('[GAME] ADD PLAYER')<Player>(),
};
export const gameFsa = fsa;

interface State {
  isStartScreenShown: boolean;
  players: Players;
}

const initialState: State = {
  isStartScreenShown: true,
  players: []
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

export const startGame = (name: string): Action => async (dispatch, getState, invoke) => {
  await invoke('OnNewGamerJoin', name);
  dispatch(gameFsa.hideStartScreen());
};
