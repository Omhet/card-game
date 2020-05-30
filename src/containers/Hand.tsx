import React, { FunctionComponent } from 'react';
import { Hand } from '../components/Hand';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';

export const HandContainer: FunctionComponent = () => {
  const hand = useSelector((state: RootState) => state.game.hand);

  return <Hand cards={hand} />;
};
