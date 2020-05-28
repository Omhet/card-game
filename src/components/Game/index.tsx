import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import MainText from '../../containers/MainText';

export const Game: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <MainText />
    </div>
  );
};
