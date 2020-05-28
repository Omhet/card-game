import React, { FunctionComponent } from 'react';
import { Arena } from '../components/Arena';
import { cards } from '../stories/data';

export const ArenaContainer: FunctionComponent = () => {
  return <Arena playerCards={cards.slice(0, 3)} centerCards={cards.slice(0, 2)} opponentCards={cards.slice(0, 1)} />
};
