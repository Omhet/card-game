import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardList } from '../CardList';

interface Props {
  playerCards: Cards;
  centerCards: Cards;
  opponentCards: Cards;
}

export const Arena: FunctionComponent<Props> = ({ playerCards, centerCards, opponentCards }) => {
  return (
    <div className={styles.main}>
      <CardList maxCardsNumber={9} cards={opponentCards} />
      <CardList maxCardsNumber={9} cards={centerCards} />
      <CardList maxCardsNumber={9} cards={playerCards} />
    </div>
  );
};
