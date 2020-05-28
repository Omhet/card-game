import React from 'react';
import { Player } from '../components/Player';
import { player } from './data';

export default {
  title: 'Player'
};

export const Basic = () => (
  <Player {...player} />
);

export const Column = () => (
  <Player isColumnLayout {...player} />
);