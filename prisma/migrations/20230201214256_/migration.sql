/*
  Warnings:

  - You are about to drop the `CamperPivot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CamperPivot";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CampToCamper" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CampToCamper_A_fkey" FOREIGN KEY ("A") REFERENCES "Camp" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CampToCamper_B_fkey" FOREIGN KEY ("B") REFERENCES "Camper" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CampToCamper_AB_unique" ON "_CampToCamper"("A", "B");

-- CreateIndex
CREATE INDEX "_CampToCamper_B_index" ON "_CampToCamper"("B");
