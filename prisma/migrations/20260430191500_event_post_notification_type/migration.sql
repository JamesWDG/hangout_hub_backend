-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('REMINDER', 'RECURRING');

-- AlterTable
ALTER TABLE "EventPost" ADD COLUMN "notificationType" "NotificationType" NOT NULL DEFAULT 'REMINDER';
