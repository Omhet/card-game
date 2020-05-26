import { createAction } from 'typesafe-actions';
import { withState } from '../helpers/typesafe-reducer';
import { ThunkAction } from '../types';

export const fsa = {
  setText: createAction('EXAMPLE/SET_TEXT')<string>()
};
export const exampleFsa = fsa;

interface State {
  text: string;
}

const initialState: State = {
  text: ''
};

export const example = withState(initialState).add(
  fsa.setText,
  (state, { payload }) => ({
    ...state,
    text: payload
  })
);

export const setText = (txt: string): ThunkAction => (dispatch, getState) => {
  const {
    example: { text }
  } = getState();
  dispatch(fsa.setText(`${text}\n${txt} - ${new Date().getSeconds()}`));
};
