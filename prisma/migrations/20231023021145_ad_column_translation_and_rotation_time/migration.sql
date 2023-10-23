/*
  Warnings:

  - Added the required column `rotation_time` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sun_distance` to the `Planet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation_time` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planet" (
    "planet_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planet_name" TEXT NOT NULL,
    "mass" REAL NOT NULL,
    "radius" REAL NOT NULL,
    "diameter" REAL NOT NULL,
    "has_ring" BOOLEAN NOT NULL DEFAULT false,
    "sun_distance" REAL NOT NULL,
    "rotation_time" REAL NOT NULL,
    "translation_time" REAL NOT NULL
);
INSERT INTO "new_Planet" ("diameter", "has_ring", "mass", "planet_id", "planet_name", "radius") SELECT "diameter", "has_ring", "mass", "planet_id", "planet_name", "radius" FROM "Planet";
DROP TABLE "Planet";
ALTER TABLE "new_Planet" RENAME TO "Planet";
CREATE UNIQUE INDEX "Planet_planet_name_key" ON "Planet"("planet_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
