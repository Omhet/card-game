import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import TreasureImage from '../../images/treasure.png'
import DoorImage from '../../images/door.png'


interface Props {
  treasures: number;
  doors: number;
  isColumnLayout?: boolean;
}

export const CardCounter: FunctionComponent<Props> = ({isColumnLayout = false, treasures, doors }) => {
  return (
    <div className={classnames(styles.main, { [styles.column]: isColumnLayout})} >
      <span>{treasures}<img className={styles.treasureImage} src={TreasureImage} /></span>
      <span>{doors}<img className={styles.doorImage} src={DoorImage} /></span>
    </div>
  );
};
