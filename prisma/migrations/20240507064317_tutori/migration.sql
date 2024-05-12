-- CreateEnum
CREATE TYPE "gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "Tutor" ADD COLUMN     "about_me" TEXT,
ADD COLUMN     "cost" INTEGER,
ADD COLUMN     "for_whom" TEXT,
ADD COLUMN     "gender" "gender",
ADD COLUMN     "lessons" TEXT,
ADD COLUMN     "location" TEXT;
