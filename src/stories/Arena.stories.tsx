import React from 'react';
import { Arena } from '../components/Arena';
import { cards } from './data';

export default {
  title: 'Arena'
};

export const Basic = () => (
  <Arena playerCards={cards.slice(0, 3)} centerCards={cards.slice(0, 2)} opponentCards={cards.slice(0, 1)} />
);
