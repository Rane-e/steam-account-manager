/*
  Warnings:

  - Added the required column `birthday` to the `EmailAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registration_date` to the `EmailAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmailAccount" ADD COLUMN     "birthday" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "registration_date" TIMESTAMP(3) NOT NULL;
