import React from 'react';
import {Control} from '../components/Control';
import TreasureImage from '../images/treasure.png'

export default {
  title: 'Control'
};

export const Basic = () => (
  <Control image={TreasureImage} onClick={() => console.log('click')} />
);
