-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Camper" (
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
INSERT INTO "new_Camper" ("act_team", "allergies", "bday", "bus", "contact", "em_contact", "em_name", "em_relation", "email", "first_date", "id", "name_first", "name_last", "paid", "paid_DateTime", "paid_channel", "paid_refno", "pco_id", "sponsor", "ygroup") SELECT "act_team", "allergies", "bday", "bus", "contact", "em_contact", "em_name", "em_relation", "email", "first_date", "id", "name_first", "name_last", "paid", "paid_DateTime", "paid_channel", "paid_refno", "pco_id", "sponsor", "ygroup" FROM "Camper";
DROP TABLE "Camper";
ALTER TABLE "new_Camper" RENAME TO "Camper";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
