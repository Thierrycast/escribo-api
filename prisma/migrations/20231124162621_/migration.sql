/*
  Warnings:

  - Made the column `ultimo_login` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "ultimo_login" SET NOT NULL,
ALTER COLUMN "ultimo_login" SET DEFAULT CURRENT_TIMESTAMP;
