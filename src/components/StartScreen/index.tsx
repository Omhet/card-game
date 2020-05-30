import React, { FunctionComponent, useState } from 'react';
import styles from './style.scss';

interface Props {
  onStartGame(name: string): void
}

export const StartScreen: FunctionComponent<Props> = ({ onStartGame }) => {
  const [name, setName] = useState('');

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <h1>Чачкин</h1>
        <h3>Человеко-движимая карточная онлайн-игра</h3>
        <div className={styles.input}>
          <label htmlFor="name">Имя:</label>
          <input onChange={e => setName(e.target.value)} value={name} id="name" type="text" placeholder="Аноним" />
          <button onClick={() => onStartGame(name)}>Играть</button>
        </div>
      </form>
    </div>
  );
};
