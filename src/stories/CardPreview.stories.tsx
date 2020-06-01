import React from 'react';
import { CardPreview } from '../components/CardPreview';

export default {
  title: 'CardPreview'
};

export const Curse = () => (
  <CardPreview url="#" subtype="curse" />
);

export const SwagHand = () => (
  <CardPreview url="#" bonus={2} subtype="swag" kind="hand" />
);
