import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Cards } from '../../types/card';
import CurseImage from '../../images/scull.png'

interface Props {
  curses: Cards;
}

export const CurseList: FunctionComponent<Props> = ({ curses }) => {
  return (
    <div className={styles.main}>
      {curses.map(({ url }, i) => <img className={styles.curse} key={i} src={CurseImage} title={url} />)}
    </div>
  );
};
