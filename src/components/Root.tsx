import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import { GameContainer as Game } from '../containers/Game';
import { StartScreenContainer as StartScreen } from '../containers/StartScreen';

const store = configureStore();
window.store = store;

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <StartScreen />
        <Game />
      </Provider>
    );
  }
}
