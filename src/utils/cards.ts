import { Cards, CardSubType, CardKind, CardKindSwagImageMap } from "../types/card";
import CurseImage from '../images/curse.png'

export const padEndEmptyCards = (cards: Cards, minLength: number) =>
    Object.assign(new Array(minLength).fill(null), cards);

export const countTreasures = (cards: Cards) => cards.filter(card => card !== null && card.type === 'treasure').length;
export const countDoors = (cards: Cards) => cards.filter(card => card !== null && card.type === 'door').length;

export const getCardImage = (subtype: CardSubType, kind?: CardKind) => {
    if (subtype === 'curse') {
        return CurseImage;
    } else if (subtype === 'swag' && kind !== undefined) {
        return CardKindSwagImageMap[kind];
    }
};