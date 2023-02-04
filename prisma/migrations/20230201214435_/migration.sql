/*
  Warnings:

  - You are about to drop the `StaffPivot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "StaffPivot";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CampToStaff" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CampToStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "Camp" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CampToStaff_B_fkey" FOREIGN KEY ("B") REFERENCES "Staff" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CampToStaff_AB_unique" ON "_CampToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_CampToStaff_B_index" ON "_CampToStaff"("B");
