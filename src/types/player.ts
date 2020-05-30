import { Cards, Curses } from './card';

export type PlayerId = '0' | '1' | '2' | '3' | '4' | '5';

export interface Player {
    id: PlayerId;
    name: string;
    race?: string;
    role?: string;
    cards: Cards;
    curses: Curses;
    treasures: number;
    doors: number;
    level: number;
}

export type Players = Array<Player | undefined>;

export enum PlayerColor {
  Cyan = '#6FF2C5',
  Blue = '#81BEF1',
  Purple = '#AD8BF2',
  Green = '#BFF288',
  Red = '#DE7878',
  Yellow = '#F0DA5E',
}
  
export const PlayerColorsMap: Record<PlayerId, PlayerColor> = {
  '0': PlayerColor.Cyan,
  '1': PlayerColor.Blue,
  '2': PlayerColor.Purple,
  '3': PlayerColor.Green,
  '4': PlayerColor.Red,
  '5': PlayerColor.Yellow,
}
