import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { Action } from '../types';
import { Players, Player, PlayerId } from '../../types/player';
import { Cards } from '../../types/card';
import { countTreasures, countDoors } from '../../utils/cards';

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

export const updatePlayer = (id: PlayerId | null, patch: Partial<Player>): Action => (dispatch, getState, invoke) => {
  const { game: { players } } = getState();

  const updatedPlayers = players.map(player => {
    if (player.id === id) {
      return {
        ...player,
        ...patch
      }
    }
    return player;
  });

  dispatch(gameFsa.setPlayers(updatedPlayers));
};


export const updateHand = (cards: Cards): Action => (dispatch, getState, invoke) => {
  const { connection: { clientId } } = getState();

  dispatch(gameFsa.setHand(cards));
  dispatch(updatePlayer(clientId, { treasures: countTreasures(cards), doors: countDoors(cards) }))
};