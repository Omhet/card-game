import React from 'react';
import { Controls } from '../components/Controls';

export default {
  title: 'Controls'
};

export const Basic = () => (
  <Controls
    onTreasureClick={() => console.log('onTreasureClick')}
    onDoorClick={() => console.log('onDoorClick')}
    onDiceClick={() => console.log('onDiceClick')}
    onDefeatClick={() => console.log('onDefeatClick')}
  />
);
