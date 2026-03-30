import "dotenv/config";

export const applicationConstants = {
    databaseUrl: process.env.DATABASE_URL ?? "",
    port: process.env.PORT ?? 3003,
    jwtSecret: process.env.JWT_SECRET ?? "",
}