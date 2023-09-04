export const ConfigEntryEnum = {
  DatabaseUrl: "DATABASE_URL",
  JwtPrivateKey: "JWT_PRIVATE_KEY",
} as const;
export type ConfigEntry = keyof typeof ConfigEntryEnum;
