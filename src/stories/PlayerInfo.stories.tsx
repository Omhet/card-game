import React from 'react';
import { PlayerInfo } from '../components/PlayerInfo';

export default {
  title: 'PlayerInfo'
};

export const Basic = () => (
  <PlayerInfo name="Вован" />
);

export const WithRole = () => (
  <PlayerInfo name="Вован" role="воин" />
);

export const WithRace = () => (
  <PlayerInfo name="Вован" race="эльф" />
);

export const WithRoleAndRace = () => (
  <PlayerInfo name="Вован" race="эльф" role="воин" />
);