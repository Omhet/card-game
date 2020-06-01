import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Curses } from '../../types/card';
import CurseImage from '../../images/curse.png'

interface Props {
  curses: Curses;
}

export const CurseList: FunctionComponent<Props> = ({ curses }) => {
  return (
    <div className={styles.main}>
      {curses.map(({ url }, i) => <img className={styles.curse} key={i} src={CurseImage} title={url} />)}
    </div>
  );
};
