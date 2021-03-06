import HandImage from '../images/sword.png'

export type CardType = 'treasure' | 'door';
export type CardSubType = 'swag' | 'curse';
export type CardKind = 'hand';
export interface Card {
    url: string;
    bonus?: number;
    type: CardType;
    subtype: CardSubType;
    kind?: CardKind;
}

export type Cards = Array<Card>;

export interface Curse {
    url: string;
}

export type Curses = Array<Curse>;

export const CardKindSwagImageMap: Record<CardKind, string> = {
    'hand': HandImage,
};