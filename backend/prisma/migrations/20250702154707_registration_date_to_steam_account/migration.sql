/*
  Warnings:

  - Added the required column `registration_date` to the `SteamAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SteamAccount" ADD COLUMN     "registration_date" TIMESTAMP(3) NOT NULL;
