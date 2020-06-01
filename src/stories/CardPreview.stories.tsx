import React from 'react';
import { CardPreview } from '../components/CardPreview';

export default {
  title: 'CardPreview'
};

export const Basic = () => (
  <CardPreview url="#" bonus={2} subtype="swag" kind="hand" />
);
