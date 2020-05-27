import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Player as Props, PlayerColorsMap } from '../../types/player';
import { Avatar } from '../Avatar';
import { LevelCounter } from '../LevelCounter';
import { PlayerInfo } from '../PlayerInfo';
import { CurseList } from '../CurseList';
import { CardCounter } from '../CardCounter';
import { CardList } from '../CardList';

export const Player: FunctionComponent<Props> = ({ id, name, race, role, cards, curses, treasures, doors, level }) => {
  const borderColor = PlayerColorsMap[id];

  return (
    <div style={{ borderColor }} className={styles.main}>
      <div className={styles.face}>
        <Avatar id={id} />
        <LevelCounter level={level} />
      </div>
      <div className={styles.body}>
        <div className={styles.info}>
          <PlayerInfo name={name} race={race} role={role} />
          <CardCounter treasures={treasures} doors={doors} />
          <CurseList curses={curses} />
        </div>
        <CardList cards={cards} />
      </div>

    </div>
  );
};
