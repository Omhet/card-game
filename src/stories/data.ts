import { Player } from '../types/player'
import { Cards } from '../types/card';

export const cards: Cards = [
    { url: '#', type: 'door', subtype: 'curse' },
    { url: '#', type: 'door', subtype: 'curse' },
    { url: '#', type: 'door', subtype: 'curse' },
    { url: '#', type: 'door', subtype: 'curse' },
    { url: '#', bonus: 2, type: 'treasure', subtype: 'swag', kind: 'hand' },
    { url: '#', bonus: 1, type: 'treasure', subtype: 'swag', kind: 'hand' },
    { url: '#', bonus: 4, type: 'treasure', subtype: 'swag', kind: 'hand' },
    { url: '#', bonus: 2, type: 'treasure', subtype: 'swag', kind: 'hand' },
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