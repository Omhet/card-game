import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { PlayerId } from '../../types/player';
import Avatar0 from '../../images/avatar-0.png'

interface Props {
  id: PlayerId;
}

const getAvatarImage = (id: PlayerId) => {
  switch (id) {
    case '0':
      return Avatar0
    default:
      return Avatar0
  }
}

export const Avatar: FunctionComponent<Props> = ({ id }) => {
  return (
    <img className={styles.main} src={getAvatarImage(id)} />
  );
};
