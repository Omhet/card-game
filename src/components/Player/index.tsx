import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Player as PlayerProps, PlayerColorsMap } from '../../types/player';
import { Avatar } from '../Avatar';
import { LevelCounter } from '../LevelCounter';
import { PlayerInfo } from '../PlayerInfo';
import { CurseList } from '../CurseList';
import { CardCounter } from '../CardCounter';
import { CardList } from '../CardList';


interface Props extends PlayerProps {
 isColumnLayout?: boolean
}

export const Player: FunctionComponent<Props> = ({isColumnLayout = false, id, name, race, role, cards = [], curses = [], treasures = 0, doors = 0, level = 1 }) => {
  const borderColor = PlayerColorsMap[id];

  return (
    <div style={{ borderColor }} className={classnames(styles.main, { [styles.column]: isColumnLayout})}>
      <div className={classnames(styles.face, { [styles.column]: isColumnLayout})}>
        <Avatar id={id} />
        {isColumnLayout && <CardCounter isColumnLayout={isColumnLayout} treasures={treasures} doors={doors} />}
        <LevelCounter level={level} />
      </div>
      <div className={classnames(styles.body, { [styles.column]: isColumnLayout})}>
        <div className={classnames(styles.info, { [styles.column]: isColumnLayout})}>
          <PlayerInfo isColumnLayout={isColumnLayout} name={name} race={race} role={role} />
          {!isColumnLayout && <CardCounter isColumnLayout={isColumnLayout} treasures={treasures} doors={doors} />}
          <CurseList curses={curses} />
        </div>
        <CardList maxCardsNumber={9} isColumnLayout={isColumnLayout} cards={cards} />
      </div>

    </div>
  );
};
