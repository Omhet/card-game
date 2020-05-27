import React from 'react';
import { CardList } from '../components/CardList';

export default {
  title: 'CardList'
};

  
export const Basic = () => (
  <CardList cards={[{ url: '#', bonus: 2 }]} />
);
