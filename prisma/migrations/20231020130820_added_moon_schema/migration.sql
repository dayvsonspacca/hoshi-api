-- CreateTable
CREATE TABLE "Moon" (
    "moon_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "moon_name" TEXT NOT NULL,
    "mass" REAL NOT NULL,
    "radius" REAL NOT NULL,
    "diameter" REAL NOT NULL,
    "planetId" INTEGER NOT NULL,
    CONSTRAINT "Moon_planetId_fkey" FOREIGN KEY ("planetId") REFERENCES "Planet" ("planet_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Moon_moon_name_key" ON "Moon"("moon_name");
