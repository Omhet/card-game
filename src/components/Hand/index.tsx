import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardList } from '../CardList';

interface Props {
  cards: Cards;
}

export const Hand: FunctionComponent<Props> = ({ cards }) => {
  return (
    <div className={styles.main}>
      <CardList maxCardsNumber={9} cards={cards} />
    </div>
  );
};
