import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardPreview } from '../CardPreview';

interface Props {
  cards: Cards;
}

export const CardList: FunctionComponent<Props> = ({ cards }) => {
  return (
    <div className={styles.main}>
      {cards.map((card, i) => <CardPreview key={i} {...card} />)}
    </div>
  );
};
