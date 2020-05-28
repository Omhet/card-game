import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import styles from './style.scss';

interface Props {
  image: string;
  className?: string;
  onClick(e: React.MouseEvent): void;
}

export const Control: FunctionComponent<Props> = ({ image, className, onClick }) => {
  return (
    <button onClick={onClick} className={classnames(styles.main, className)}><img src={image} /></button>
  );
};
