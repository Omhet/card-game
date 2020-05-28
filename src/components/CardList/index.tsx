import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Cards } from '../../types/card';
import { CardPreview } from '../CardPreview';
import { EmptyCard } from '../EmptyCard';


interface Props {
  cards: Cards;
  isColumnLayout?: boolean;
}

export const CardList: FunctionComponent<Props> = ({ cards, isColumnLayout = false }) => {
  return (
    <div className={classnames(styles.main, { [styles.column]: isColumnLayout})}>
      {cards.map((card, i) => card === null ? <EmptyCard key={i} /> : <CardPreview key={i} {...card} />)}
    </div>
  );
};
