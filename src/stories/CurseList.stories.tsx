import React from 'react';
import { CurseList } from '../components/CurseList';

export default {
  title: 'CurseList'
};

export const Basic = () => (
  <CurseList curses={[{ url: '#' }]} />
);
