import React, { FunctionComponent } from 'react';
import { Game } from '../components/Game';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

export const GameContainer: FunctionComponent = () => {
  const players = useSelector((state: RootState) => state.game.players);

  return <Game players={players} />;
};
