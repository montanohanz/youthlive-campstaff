-- CreateTable
CREATE TABLE "Camp" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "dateStart" DATETIME NOT NULL,
    "dateEnd" DATETIME NOT NULL,
    "location" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "staff_pax" INTEGER NOT NULL,
    "camper_pax" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Camper" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pco_id" TEXT,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "name_first" TEXT NOT NULL,
    "name_last" TEXT NOT NULL,
    "bday" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "em_name" TEXT NOT NULL,
    "em_contact" TEXT NOT NULL,
    "em_relation" TEXT NOT NULL,
    "allergies" TEXT,
    "paid" BOOLEAN NOT NULL,
    "paid_channel" TEXT NOT NULL,
    "paid_refno" TEXT,
    "paid_DateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ygroup" TEXT NOT NULL,
    "bus" TEXT NOT NULL,
    "act_team" TEXT NOT NULL,
    "sponsor" TEXT,
    "first_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pco_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'marshal'
);

-- CreateTable
CREATE TABLE "_CampToCamper" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CampToCamper_A_fkey" FOREIGN KEY ("A") REFERENCES "Camp" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CampToCamper_B_fkey" FOREIGN KEY ("B") REFERENCES "Camper" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CampToStaff" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CampToStaff_A_fkey" FOREIGN KEY ("A") REFERENCES "Camp" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CampToStaff_B_fkey" FOREIGN KEY ("B") REFERENCES "Staff" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CampToCamper_AB_unique" ON "_CampToCamper"("A", "B");

-- CreateIndex
CREATE INDEX "_CampToCamper_B_index" ON "_CampToCamper"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CampToStaff_AB_unique" ON "_CampToStaff"("A", "B");

-- CreateIndex
CREATE INDEX "_CampToStaff_B_index" ON "_CampToStaff"("B");
