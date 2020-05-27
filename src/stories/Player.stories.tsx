import React from 'react';
import { Player } from '../components/Player';
import { Player as Props } from '../types/player';

export default {
  title: 'Player'
};

const props: Props = {
  id: '0',
  name: 'Вован',
  race: 'эльф',
  role: 'вор',
  curses: [{ url: '#' }],
  cards: [{ url: '#', bonus: 2 }],
  level: 4,
  treasures: 2,
  doors: 3
}

export const Basic = () => (
  <Player {...props} />
);
