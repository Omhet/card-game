import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Action } from '../types';
import { Players } from '../../types/player';
import { player } from '../../stories/data';

const fsa = {
  hideStartScreen: createAction('[GAME] HIDE START SCREEN')(),
  setPlayers: createAction('[GAME] SET PLAYERS')<Players>()
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

export const startGame = (name: string): Action => (dispatch) => {
  console.log(name)
  dispatch(gameFsa.setPlayers([player, { ...player, id: '1', name: 'Дарюха' }]));
  dispatch(gameFsa.hideStartScreen());
};
