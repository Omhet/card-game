import React from 'react';
import { Player } from '../components/Player';
import { Player as PlayerProps } from '../types/player';
import { cards } from './data';

export default {
  title: 'Player'
};

const props: PlayerProps = {
  id: '0',
  name: 'Вован',
  race: 'эльф',
  role: 'вор',
  curses: [{ url: '#' }],
  cards: cards,
  level: 4,
  treasures: 2,
  doors: 3
}

export const Row = () => (
  <Player {...props} />
);

export const Column = () => (
  <Player isColumnLayout {...props} />
);