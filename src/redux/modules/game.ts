import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from '../types';

const fsa = {
  hideStartScreen: createAction('[GAME] HIDE START SCREEN')()
};
export const gameFsa = fsa;

interface State {
  isStartScreenShown: boolean;
}

const initialState: State = {
  isStartScreenShown: true
};

export const game = withState(initialState).add(
  fsa.hideStartScreen,
  (state) => ({
    ...state,
    isStartScreenShown: false
  })
);

export const startGame = (name: string): ThunkAction => (dispatch) => {
  console.log(name)
  dispatch(gameFsa.hideStartScreen());
};
