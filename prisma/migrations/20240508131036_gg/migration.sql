/*
  Warnings:

  - You are about to drop the column `birth_day` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `patronymic` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `birth_day` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `login` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `patronymic` on the `Tutor` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Tutor` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userid]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userid]` on the table `Tutor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userid` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Tutor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('Tutor', 'Student');

-- DropIndex
DROP INDEX "Student_login_key";

-- DropIndex
DROP INDEX "Tutor_login_key";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "birth_day",
DROP COLUMN "login",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "patronymic",
DROP COLUMN "surname",
ADD COLUMN     "userid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tutor" DROP COLUMN "birth_day",
DROP COLUMN "gender",
DROP COLUMN "location",
DROP COLUMN "login",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "patronymic",
DROP COLUMN "surname",
ADD COLUMN     "userid" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "patronymic" TEXT,
    "location" TEXT,
    "birth_day" TIMESTAMP(3),
    "gender" "gender",
    "role" "role" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userid_key" ON "Student"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_userid_key" ON "Tutor"("userid");

-- AddForeignKey
ALTER TABLE "Tutor" ADD CONSTRAINT "Tutor_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userid_fkey" FOREIGN KEY ("userid") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
