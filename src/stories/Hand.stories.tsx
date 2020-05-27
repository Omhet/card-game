import React from 'react';
import { Hand } from '../components/Hand';

export default {
  title: 'Hand'
};

const cards = [{ url: '#', bonus: 2 }, { url: '#', bonus: 3 }, { url: '#', bonus: 1 }, { url: '#', bonus: 4 }, { url: '#', bonus: 2 }]
  
export const Basic = () => (
  <Hand cards={cards} />
);
