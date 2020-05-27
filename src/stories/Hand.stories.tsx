import React from 'react';
import { Hand } from '../components/Hand';
import { cards } from './data';

export default {
  title: 'Hand'
};

  
export const Basic = () => (
  <Hand cards={cards} />
);
