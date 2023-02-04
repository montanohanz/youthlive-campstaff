-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CamperPivot" (
    "camper_id" TEXT NOT NULL,
    "camp_id" TEXT NOT NULL,
    "reg_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("camper_id", "camp_id"),
    CONSTRAINT "CamperPivot_camper_id_fkey" FOREIGN KEY ("camper_id") REFERENCES "Camper" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CamperPivot_camp_id_fkey" FOREIGN KEY ("camp_id") REFERENCES "Camp" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CamperPivot" ("camp_id", "camper_id", "reg_time") SELECT "camp_id", "camper_id", "reg_time" FROM "CamperPivot";
DROP TABLE "CamperPivot";
ALTER TABLE "new_CamperPivot" RENAME TO "CamperPivot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
