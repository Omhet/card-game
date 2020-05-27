import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import TreasureImage from '../../images/treasure.png'
import DoorImage from '../../images/door.png'

interface Props {
  treasures: number;
  doors: number;
}

export const CardCounter: FunctionComponent<Props> = ({ treasures, doors }) => {
  return (
    <div className={styles.main}>
      {treasures}<img className={styles.treasureImage} src={TreasureImage} />
      {doors}<img className={styles.doorImage} src={DoorImage} />
    </div>
  );
};
