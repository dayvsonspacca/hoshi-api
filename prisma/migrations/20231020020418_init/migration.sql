-- CreateTable
CREATE TABLE "Planet" (
    "planet_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "planet_name" TEXT NOT NULL,
    "mass" REAL NOT NULL,
    "radius" REAL NOT NULL,
    "diameter" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Planet_planet_name_key" ON "Planet"("planet_name");
