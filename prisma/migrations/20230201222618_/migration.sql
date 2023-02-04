/*
  Warnings:

  - Added the required column `email` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Camper" ADD COLUMN "contact" TEXT;
ALTER TABLE "Camper" ADD COLUMN "email" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pco_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'marshal'
);
INSERT INTO "new_Staff" ("id", "pco_id", "role") SELECT "id", "pco_id", "role" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
