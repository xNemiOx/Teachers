/*
  Warnings:

  - The values [Tutor,Student] on the enum `role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "role_new" AS ENUM ('tutor', 'student');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "role_new" USING ("role"::text::"role_new");
ALTER TYPE "role" RENAME TO "role_old";
ALTER TYPE "role_new" RENAME TO "role";
DROP TYPE "role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_userid_fkey";

-- DropForeignKey
ALTER TABLE "Tutor" DROP CONSTRAINT "Tutor_userid_fkey";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
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

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Tutor" ADD CONSTRAINT "Tutor_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
