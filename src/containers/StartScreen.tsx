import React, { FunctionComponent } from 'react';
import { StartScreen } from '../components/StartScreen';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/types';
import { startGame } from '../redux/modules/game';

export const StartScreenContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isStartScreenShown = useSelector((state: RootState) => state.game.isStartScreenShown);

  return isStartScreenShown ? <StartScreen onStartGame={(name: string) => dispatch(startGame(name))} /> : null;
};
