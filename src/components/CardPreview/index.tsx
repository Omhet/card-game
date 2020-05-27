import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import SwagImage from '../../images/sword.png'
import { Card } from '../../types/card';

export const CardPreview: FunctionComponent<Card> = ({ bonus }) => {
  return (
    <div className={styles.main}>
      <span className={styles.bonus} >+{bonus}</span>
      <img className={styles.image} src={SwagImage} />
    </div>
  );
};
