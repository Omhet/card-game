import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardList } from '../CardList';
import { padEndEmptyCards } from '../../utils/cards';

interface Props {
  playerCards: Cards;
  centerCards: Cards;
  opponentCards: Cards;
}

export const Arena: FunctionComponent<Props> = ({ playerCards, centerCards, opponentCards }) => {
  return (
    <div className={styles.main}>
      <CardList cards={padEndEmptyCards(opponentCards, 9)} />
      <CardList cards={padEndEmptyCards(centerCards, 9)} />
      <CardList cards={padEndEmptyCards(playerCards, 9)} />
    </div>
  );
};
