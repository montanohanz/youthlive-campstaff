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
    "name_first" TEXT NOT NULL,
    "name_last" TEXT NOT NULL,
    "bday" DATETIME NOT NULL,
    "em_name" TEXT NOT NULL,
    "em_contact" TEXT NOT NULL,
    "em_relation" TEXT NOT NULL,
    "allergies" TEXT,
    "paid" BOOLEAN NOT NULL,
    "paid_channel" TEXT NOT NULL,
    "paid_refno" TEXT,
    "paid_DateTime" DATETIME NOT NULL,
    "ygroup" TEXT NOT NULL,
    "bus" TEXT NOT NULL,
    "act_team" TEXT NOT NULL,
    "sponsor" TEXT,
    "first_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pco_id" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'marshal'
);

-- CreateTable
CREATE TABLE "CamperPivot" (
    "camper_id" TEXT NOT NULL,
    "camp_id" TEXT NOT NULL,
    "reg_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("camper_id", "camp_id"),
    CONSTRAINT "CamperPivot_camper_id_fkey" FOREIGN KEY ("camper_id") REFERENCES "Camper" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CamperPivot_camp_id_fkey" FOREIGN KEY ("camp_id") REFERENCES "Camp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StaffPivot" (
    "staff_id" TEXT NOT NULL,
    "camp_id" TEXT NOT NULL,
    "reg_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("staff_id", "camp_id"),
    CONSTRAINT "StaffPivot_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StaffPivot_camp_id_fkey" FOREIGN KEY ("camp_id") REFERENCES "Camp" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
