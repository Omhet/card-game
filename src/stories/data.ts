import { Player } from '../types/player'

export const cards = [{ url: '#', bonus: 2 }, { url: '#', bonus: 3 }, { url: '#', bonus: 1 }, { url: '#', bonus: 4 }, { url: '#', bonus: 2 }]


export const player: Player = {
    id: '0',
    name: 'Вован',
    race: 'эльф',
    role: 'вор',
    curses: [{ url: '#' }],
    cards: cards,
    level: 4,
    treasures: 2,
    doors: 3
};