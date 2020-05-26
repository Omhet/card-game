export const getPlayerTitle = (race?: string, role?: string) => `${race ?? ''}${race !== undefined && role !== undefined ? '/' : ''}${role ?? ''}`
