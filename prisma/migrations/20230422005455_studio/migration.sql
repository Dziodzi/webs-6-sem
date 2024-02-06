/*
  Warnings:

  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "created_at";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "created_at";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "created_at";
