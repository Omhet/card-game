import { Cards } from "../types/card";

export const padEndEmptyCards = (cards: Cards, minLength: number) =>
    Object.assign(new Array(minLength).fill(null), cards);

export const countTreasures = (cards: Cards) => cards.filter(card => card !== null && card.type === 'treasure').length;
export const countDoors = (cards: Cards) => cards.filter(card => card !== null && card.type === 'door').length;