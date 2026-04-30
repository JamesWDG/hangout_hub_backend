/*
  Warnings:

  - Added the required column `pollEndDate` to the `Poll` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Poll" ADD COLUMN     "pollEndDate" TIMESTAMP(3) NOT NULL;
