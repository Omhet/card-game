import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Card } from '../../types/card';
import { getCardImage } from '../../utils/cards';

export const CardPreview: FunctionComponent<Omit<Card, 'type'>> = ({ url, bonus, subtype, kind }) => {
  return (
    <div className={styles.main}>
      {bonus !== undefined && <span className={styles.bonus} >+{bonus}</span>}
      <img title={url} className={styles.image} src={getCardImage(subtype, kind)} />
    </div>
  );
};
