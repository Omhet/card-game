import React, { FunctionComponent } from 'react';
import { Controls } from '../components/Controls';

export const ControlsContainer: FunctionComponent = () => {
  return <Controls
  onTreasureClick={() => console.log('onTreasureClick')}
  onDoorClick={() => console.log('onDoorClick')}
  onDiceClick={() => console.log('onDiceClick')}
  onDefeatClick={() => console.log('onDefeatClick')}
/>
};
