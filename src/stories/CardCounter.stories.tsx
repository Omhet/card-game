import React from 'react';
import { CardCounter } from '../components/CardCounter';

export default {
  title: 'CardCounter'
};

export const Basic = () => (
  <CardCounter treasures={3} doors={2} />
);

export const Column = () => (
  <CardCounter isColumnLayout treasures={3} doors={2} />
);