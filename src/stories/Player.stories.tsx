import React from 'react';
import { Player } from '../components/Player';
import { Player as PlayerProps } from '../types/player';

export default {
  title: 'Player'
};

const props: PlayerProps = {
  id: '0',
  name: 'Вован',
  race: 'эльф',
  role: 'вор',
  curses: [{ url: '#' }],
  cards: [{ url: '#', bonus: 2 }, { url: '#', bonus: 3 }, { url: '#', bonus: 1 }, { url: '#', bonus: 4 }, { url: '#', bonus: 2 }],
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