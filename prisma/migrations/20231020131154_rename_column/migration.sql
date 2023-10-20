/*
  Warnings:

  - You are about to drop the column `planetId` on the `Moon` table. All the data in the column will be lost.
  - Added the required column `planet_id` to the `Moon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Moon" (
    "moon_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "moon_name" TEXT NOT NULL,
    "mass" REAL NOT NULL,
    "radius" REAL NOT NULL,
    "diameter" REAL NOT NULL,
    "planet_id" INTEGER NOT NULL,
    CONSTRAINT "Moon_planet_id_fkey" FOREIGN KEY ("planet_id") REFERENCES "Planet" ("planet_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Moon" ("diameter", "mass", "moon_id", "moon_name", "radius") SELECT "diameter", "mass", "moon_id", "moon_name", "radius" FROM "Moon";
DROP TABLE "Moon";
ALTER TABLE "new_Moon" RENAME TO "Moon";
CREATE UNIQUE INDEX "Moon_moon_name_key" ON "Moon"("moon_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
