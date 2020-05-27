import React from 'react';
import { CardList } from '../components/CardList';
import { cards } from './data';

export default {
  title: 'CardList'
};

  
export const Basic = () => (
  <CardList cards={cards} />
);
