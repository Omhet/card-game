import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import { Control } from '../Control';
import TreasureImage from '../../images/treasure.png'
import DoorImage from '../../images/door.png'
import DiceImage from '../../images/dice.png'
import DefeatImage from '../../images/defeat.png'

interface Props {
  onTreasureClick(): void;
  onDoorClick(): void;
  onDiceClick(): void;
  onDefeatClick(): void;
}

export const Controls: FunctionComponent<Props> = ({ onTreasureClick, onDoorClick, onDiceClick, onDefeatClick }) => {
  return (
    <div className={styles.main}>
      <Control className={styles.topLeft} image={TreasureImage} onClick={onTreasureClick}/>
      <Control className={styles.bottomLeft} image={DoorImage} onClick={onDoorClick}/>
      <Control className={styles.topRight} image={DiceImage} onClick={onDiceClick}/>
      <Control className={styles.bottomRight} image={DefeatImage} onClick={onDefeatClick}/>
    </div>
  );
};
