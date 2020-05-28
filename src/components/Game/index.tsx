import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import { Player } from '../Player';
import { Players } from '../../types/player';
import { EmptyPlayer } from '../EmptyPlayer';
import { ControlsContainer as Controls } from '../../containers/Controls';
import { ArenaContainer as Arena } from '../../containers/Arena';
import { HandContainer as Hand } from '../../containers/Hand';

interface Props {
  players: Players;
}

export const Game: FunctionComponent<Props> = ({ players: [first, second, third, fourth, fifth, sixth] }) => {
  return (
    <div className={styles.main}>

      <div className={styles.row}>
        {second !== undefined && <Player {...second} />}
        {fifth !== undefined && <Player {...fifth} />}
      </div>

      <div className={classnames(styles.row, styles.center)}>
        {third !== undefined ? <Player isColumnLayout {...third} /> : <EmptyPlayer isColumnLayout />}
        <div className={styles.arena}>
          <Arena />
          <Hand />
          <Controls />
        </div>
        {fourth !== undefined ? <Player isColumnLayout {...fourth} /> : <EmptyPlayer isColumnLayout />}
      </div>

      <div className={styles.row}>
        {first !== undefined && <Player {...first} />}
        {sixth !== undefined && <Player {...sixth} />}
      </div>

    </div>
  );
};
