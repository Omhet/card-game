export interface Card {
    url: string;
    bonus?: number;
    type: 'treasure' | 'door'
}

export type Cards = Array<Card | null>;

export interface Curse {
    url: string;
}

export type Curses = Array<Curse>;