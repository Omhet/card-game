import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { EmptyCard } from '../EmptyCard';

interface Props {
  cardsNumber: number;
  isColumnLayout?: boolean;
}

export const EmptyCardList: FunctionComponent<Props> = ({ cardsNumber, isColumnLayout = false }) => {
  return (
    <div className={classnames(styles.main, { [styles.column]: isColumnLayout})}>
      {new Array(cardsNumber).fill(null).map((_, i) => <EmptyCard key={i} />)}
    </div>
  );
};
