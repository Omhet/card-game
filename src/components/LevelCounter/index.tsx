import React, { FunctionComponent } from 'react';
import styles from './style.scss';

interface Props {
  level: number;
}

export const LevelCounter: FunctionComponent<Props> = ({ level }) => {
  return (
    <div className={styles.main}>
      {level}
    </div>
  );
};
