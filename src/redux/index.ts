import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './rootReducer';
import { RootState } from './types';
import { signal } from './helpers/withSignalR';

export default function configureStore(preloadedState?: RootState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(signal)
  );
}
