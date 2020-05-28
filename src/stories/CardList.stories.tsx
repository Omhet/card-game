import React from 'react';
import { CardList } from '../components/CardList';
import { cards } from './data';

export default {
  title: 'CardList'
};

  
export const Basic = () => (
  <CardList cards={cards} />
);

export const WithAllCardsEmpty = () => (
  <CardList cards={new Array(5).fill(null)} />
);

export const Column = () => (
  <CardList isColumnLayout cards={cards} />
);
