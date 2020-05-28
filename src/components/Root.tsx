import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux';
import {Game} from './Game';

const store = configureStore();
window.store = store;

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
