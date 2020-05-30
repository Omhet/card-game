import React, { FunctionComponent } from 'react';
import { StartScreen } from '../components/StartScreen';

export const StartScreenContainer: FunctionComponent = () => {
  return <StartScreen onStartGame={() => console.log('start')} />;
};
