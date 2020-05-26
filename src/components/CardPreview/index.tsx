import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import SwagImage from '../../images/sword.png'

interface Props {
  bonus?: number;
}

export const CardPreview: FunctionComponent<Props> = ({ bonus }) => {
  return (
    <div className={styles.main}>
      <span className={styles.bonus} >+{bonus}</span>
      <img className={styles.image} src={SwagImage} />
    </div>
  );
};
