/*
  Warnings:

  - You are about to drop the column `package_id` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_package_id_fkey";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "package_id",
ADD COLUMN     "author_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
