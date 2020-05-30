import { Player, PlayerId } from '../types/player'

export const getPlayerTitle = (race?: string, role?: string) => `${race ?? ''}${race !== undefined && role !== undefined ? '/' : ''}${role ?? ''}`

export const createPlayer = (id: PlayerId, name: string, patch?: Partial<Player>): Player =>
    ({
        treasures: 0,
        doors: 0,
        cards: [],
        curses: [],
        level: 1,
        id,
        name,
        ...patch
    })