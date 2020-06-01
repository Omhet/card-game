export type CardType = 'treasure' | 'door';
export type CardSubType = 'swag' | 'curse' | 'buff' | 'debuff';
export type CardKind = 'hand' | 'shield' | 'head' | 'armor';
export interface Card {
    url: string;
    bonus?: number;
    type: CardType;
    subtype: CardSubType;
    kind?: CardKind;
}

export type Cards = Array<Card | null>;

export interface Curse {
    url: string;
}

export type Curses = Array<Curse>;