import { Player } from '../types/player'
import { Cards } from '../types/card';

export const cards: Cards = [
    { url: '#', bonus: 2, type: 'door' },
    { url: '#', bonus: 3, type: 'door' },
    { url: '#', bonus: 1, type: 'door' },
    { url: '#', bonus: 4, type: 'door' },
    { url: '#', bonus: 2, type: 'treasure' },
    { url: '#', bonus: 2, type: 'treasure' },
    { url: '#', bonus: 2, type: 'treasure' },
    { url: '#', bonus: 2, type: 'treasure' },
]


export const player: Player = {
    id: 0,
    name: 'Вован',
    race: 'эльф',
    role: 'вор',
    curses: [{ url: '#' }],
    cards: cards,
    level: 4,
    treasures: 2,
    doors: 3
};