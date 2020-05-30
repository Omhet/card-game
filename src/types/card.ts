export interface Card {
    url: string;
    bonus?: number;
    type: 'treasure' | 'door'
}

export type Cards = Array<Card>;

export interface Curse {
    url: string;
}

export type Curses = Array<Curse>;