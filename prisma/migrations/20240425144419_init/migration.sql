-- CreateEnum
CREATE TYPE "dayofweek" AS ENUM ('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday');

-- CreateTable
CREATE TABLE "Qualification" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutor_Qualification" (
    "id" SERIAL NOT NULL,
    "tutor_id" INTEGER NOT NULL,
    "qualification_id" INTEGER NOT NULL,

    CONSTRAINT "Tutor_Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tutor" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT,
    "birth_day" TIMESTAMP(3) NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tutor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Raiting_reviews" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "tutor_id" INTEGER NOT NULL,
    "comment" TEXT,
    "rating" DECIMAL(65,30),

    CONSTRAINT "Raiting_reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "patronymic" TEXT,
    "birth_day" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserv" (
    "id" SERIAL NOT NULL,
    "sheadule_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "lessons_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reserv_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sheadule" (
    "id" SERIAL NOT NULL,
    "tutor_id" INTEGER NOT NULL,
    "lessons_name" TEXT NOT NULL,
    "dayofweek" "dayofweek" NOT NULL,
    "lessons_start" TIMESTAMP(3) NOT NULL,
    "lessons_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sheadule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tutor_login_key" ON "Tutor"("login");

-- CreateIndex
CREATE UNIQUE INDEX "Student_login_key" ON "Student"("login");
