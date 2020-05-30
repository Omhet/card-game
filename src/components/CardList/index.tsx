import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardPreview } from '../CardPreview';
import { EmptyCard } from '../EmptyCard';


interface Props {
  cards: Cards;
  maxCardsNumber: number;
  isColumnLayout?: boolean;
}

export const CardList: FunctionComponent<Props> = ({ cards, maxCardsNumber, isColumnLayout = false }) => {
  return (
    <div>
      <div className={classnames(styles.grid, styles.emptyList, { [styles.column]: isColumnLayout })}>
        {new Array(maxCardsNumber).fill(null).map((_, i) => <EmptyCard key={i} />)}
      </div>
      <div className={classnames(styles.grid, { [styles.column]: isColumnLayout })}>
        {cards.map((card, i) => <CardPreview key={i} {...card} />)}
      </div>
    </div>
  );
};
