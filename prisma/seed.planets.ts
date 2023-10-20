import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';

try {
  createPlanets()
} catch (error) {
  console.error('Erro ao executar seed:');
}

async function createPlanet(planet, prisma: PrismaClient) {
  await prisma.planet.create({ data: planet });
}

async function createPlanets() {
  const prisma = new PrismaClient();
  const planetPath = 'prisma/planets.json';
  const planetJson = readFileSync(planetPath, 'utf-8');
  const planets = JSON.parse(planetJson);

  for (const planet of planets) {
    await createPlanet(planet, prisma).finally(() => {
      console.log(`${planet.planet_name} added.`);
    });
  }
  console.log('Planets seed successful.');
}
