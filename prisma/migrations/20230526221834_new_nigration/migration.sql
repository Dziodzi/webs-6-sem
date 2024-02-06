/*
  Warnings:

  - You are about to drop the `Place` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PlaceTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "PlaceTag" DROP CONSTRAINT "PlaceTag_placeId_fkey";

-- DropForeignKey
ALTER TABLE "PlaceTag" DROP CONSTRAINT "PlaceTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_placeId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_placeId_fkey";

-- DropTable
DROP TABLE "Place";

-- DropTable
DROP TABLE "PlaceTag";

-- DropTable
DROP TABLE "Reservation";

-- DropTable
DROP TABLE "Tag";
