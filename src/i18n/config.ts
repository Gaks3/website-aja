export type Locale = (typeof locales)[number]

export const locales = ['us', 'id'] as const
export const defaultLocale: Locale = 'us'
