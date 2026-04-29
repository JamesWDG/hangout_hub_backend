/*
  Warnings:

  - You are about to drop the `pollOptions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[postId]` on the table `EventPost` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `Poll` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `SimplePost` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `EventPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postId` to the `Poll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('SIMPLE', 'EVENT', 'POLL');

-- DropForeignKey
ALTER TABLE "SimplePost" DROP CONSTRAINT "SimplePost_postId_fkey";

-- DropForeignKey
ALTER TABLE "pollOptions" DROP CONSTRAINT "pollOptions_pollId_fkey";

-- AlterTable
ALTER TABLE "EventPost" ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "postId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "type" "PostType" NOT NULL;

-- DropTable
DROP TABLE "pollOptions";

-- CreateTable
CREATE TABLE "PollOption" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL,
    "pollId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PollOption_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventPost_postId_key" ON "EventPost"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "Poll_postId_key" ON "Poll"("postId");

-- CreateIndex
CREATE INDEX "Post_groupId_createdAt_idx" ON "Post"("groupId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "SimplePost_postId_key" ON "SimplePost"("postId");

-- AddForeignKey
ALTER TABLE "SimplePost" ADD CONSTRAINT "SimplePost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventPost" ADD CONSTRAINT "EventPost_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Poll" ADD CONSTRAINT "Poll_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PollOption" ADD CONSTRAINT "PollOption_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Poll"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
