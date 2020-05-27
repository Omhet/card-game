import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { getPlayerTitle } from '../../utils/player';


interface Props {
  name: string;
  role?: string;
  race?: string;
  isColumnLayout?: boolean;
}

export const PlayerInfo: FunctionComponent<Props> = ({ name, role, race, isColumnLayout = false }) => {
  return (
    <div className={classnames(styles.main, { [styles.column]: isColumnLayout})}>
      <span className={styles.name}>{name}</span>
      <span className={styles.title}>{getPlayerTitle(race, role)}</span>
    </div>
  );
};
