import React, { FunctionComponent } from 'react';
import { Game } from '../components/Game';
import { player } from '../stories/data';

export const GameContainer: FunctionComponent = () => {
  return <Game players={[player, player, player, player, player, player]} />;
};
