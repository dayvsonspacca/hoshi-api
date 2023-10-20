import { readFileSync } from 'fs';
import { PrismaClient } from '@prisma/client';

try {
  createMoons();
} catch (error) {
  console.error('Erro ao executar seed:');
}

async function createMoons() {
  const prisma = new PrismaClient();
  const moonPath = 'prisma/moons.json';
  const moonJson = readFileSync(moonPath, 'utf-8');
  const moons = JSON.parse(moonJson);

  for (const moon of moons) {
    await createMoon(moon, prisma).finally(() => {
      console.log(`${moon.moon_name} added.`);
    });
  }

  console.log('Moons seed successful.');
}

async function createMoon(moon, prisma: PrismaClient) {
  await prisma.moon.create({
    data: {
      moon_name: moon.moon_name,
      mass: moon.mass,
      diameter: moon.diameter,
      radius: moon.radius,
      planet: { connect: { planet_id: moon.planet_id } },
    },
  });
}
