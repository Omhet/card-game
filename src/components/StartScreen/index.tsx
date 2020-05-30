import React, { FunctionComponent } from 'react';
import styles from './style.scss';

interface Props {
  onStartGame(): void
}

export const StartScreen: FunctionComponent<Props> = ({ onStartGame }) => {

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <h1>Чачкин</h1>
        <h3>Человеко-движимая карточная онлайн-игра</h3>
        <div className={styles.input}>
          <label htmlFor="name">Имя:</label>
          <input id="name" type="text" placeholder="Аноним" />
          <button onClick={onStartGame}>Играть</button>
        </div>
      </form>
    </div>
  );
};
