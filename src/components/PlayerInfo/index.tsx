import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { getPlayerTitle } from '../../utils/player';

interface Props {
  name: string;
  role?: string;
  race?: string;
}

export const PlayerInfo: FunctionComponent<Props> = ({ name, role, race }) => {
  return (
    <div className={styles.main}>
      <span className={styles.name}>{name}</span>
      <span className={styles.title}>{getPlayerTitle(race, role)}</span>
    </div>
  );
};
