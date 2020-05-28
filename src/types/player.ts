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

export type PlayerColor = '#6FF2C5' | '#AD8BF2' | '#BFF288' | '#81BEF1' | '#DE7878' | '#F0DA5E';
  
export const PlayerColorsMap: Record<PlayerId, PlayerColor> = {
  '0': '#6FF2C5',
  '1': '#81BEF1',
  '2': '#AD8BF2',
  '3': '#BFF288',
  '4': '#DE7878',
  '5': '#F0DA5E',
}