import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { PlayerId, PlayerAvatarMap } from '../../types/player';

interface Props {
  id: PlayerId;
}

export const Avatar: FunctionComponent<Props> = ({ id }) => {
  return (
    <img className={styles.main} src={PlayerAvatarMap[id]} />
  );
};
