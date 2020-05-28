import { Cards } from "../types/card";

export const padEndEmptyCards = (cards: Cards, minLength: number) =>
    Object.assign(new Array(minLength).fill(null), cards);