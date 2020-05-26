import React, { FunctionComponent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '../redux/modules/example';
import Button from '../components/Button/Button';

const MainButton: FunctionComponent = () => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(setText('Text'));
  }, []);

  return <Button onClick={handleClick}>PUSH ME</Button>;
};

export default MainButton;
