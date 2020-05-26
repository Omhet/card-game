import React, { FunctionComponent } from 'react';
import styles from './style.scss';
import MainButton from '../../containers/MainButton';
import MainText from '../../containers/MainText';

const App: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <MainButton />
      <MainText />
    </div>
  );
};

export default App;
