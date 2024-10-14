export type Locale = (typeof locales)[number];

export const locales = ["en", "pt", "jp", "cn", "tg"] as const;
export const defaultLocale: Locale = "pt";
