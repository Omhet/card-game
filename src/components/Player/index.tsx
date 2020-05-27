import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Player as Props } from '../../types/player';
import { Avatar } from '../Avatar';
import { LevelCounter } from '../LevelCounter';
import { PlayerInfo } from '../PlayerInfo';
import { CurseList } from '../CurseList';
import { CardCounter } from '../CardCounter';

export const Player: FunctionComponent<Props> = ({ id, name, race, role, cards, curses, treasures, doors, level }) => {
  return (
    <div className={styles.main}>
      <Avatar id={id} />
      <LevelCounter level={level} />
      <PlayerInfo name={name} race={race} role={role} />
      <CardCounter treasures={treasures} doors={doors} />
      <CurseList curses={curses} />
    </div>
  );
};
