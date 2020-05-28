import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props  {
 isColumnLayout?: boolean
}

export const EmptyPlayer: FunctionComponent<Props> = ({isColumnLayout = false }) => {

  return (
    <div className={classnames(styles.main, { [styles.column]: isColumnLayout})}></div>
  );
};
