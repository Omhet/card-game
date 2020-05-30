import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { PlayerId } from '../../types/player';

const fsa = {
  setClientId: createAction('[GAME] SET CLIENT ID')<PlayerId>(),
};
export const connectionFsa = fsa;

interface State {
  clientId: PlayerId | null;
}

const initialState: State = {
  clientId: null,
};

export const connection = withState(initialState)
  .add(fsa.setClientId, (state, { payload }) => ({
    ...state,
    clientId: payload
  }))
