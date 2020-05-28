import React, { FunctionComponent } from 'react';
import { Hand } from '../components/Hand';
import { cards } from '../stories/data';

export const HandContainer: FunctionComponent = () => {
  return <Hand cards={cards} />;
};
