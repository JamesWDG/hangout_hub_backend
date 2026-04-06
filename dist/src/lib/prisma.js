import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";
import { applicationConfig } from "../constant.js";
const connectionString = applicationConfig.DATABASE_URL ?? "";
if (connectionString == null || connectionString === "") {
    throw new Error("DATABASE_URL is not set");
}
const adapter = new PrismaPg(connectionString);
const prisma = new PrismaClient({ adapter });
export { prisma };
//# sourceMappingURL=prisma.js.map