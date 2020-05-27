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
  