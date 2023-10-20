/*
  Warnings:

  - You are about to drop the column `hasRing` on the `Planet` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Planet" (
    "planet_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planet_name" TEXT NOT NULL,
    "mass" REAL NOT NULL,
    "radius" REAL NOT NULL,
    "diameter" REAL NOT NULL,
    "has_ring" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Planet" ("diameter", "mass", "planet_id", "planet_name", "radius") SELECT "diameter", "mass", "planet_id", "planet_name", "radius" FROM "Planet";
DROP TABLE "Planet";
ALTER TABLE "new_Planet" RENAME TO "Planet";
CREATE UNIQUE INDEX "Planet_planet_name_key" ON "Planet"("planet_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
