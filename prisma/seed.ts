import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createPlanets() {
  await prisma.planet.create({
    data: {
      planet_name: 'Sun',
      mass: 1.989e30,
      radius: 696340,
      diameter: 1392700,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Mercury',
      mass: 3.285e23,
      radius: 2439.7,
      diameter: 4879.4,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Venus',
      mass: 4.867e24,
      radius: 6051.8,
      diameter: 12103.6,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Earth',
      mass: 5.972e24,
      radius: 6371.0,
      diameter: 12742.0,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Mars',
      mass: 6.39e23,
      radius: 3389.5,
      diameter: 6792.4,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Jupiter',
      mass: 1.898e27,
      radius: 69911.0,
      diameter: 139822.0,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Saturn',
      mass: 5.683e26,
      radius: 58232.0,
      diameter: 116464.0,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Uranus',
      mass: 8.681e25,
      radius: 25362.0,
      diameter: 50724.0,
    },
  });

  await prisma.planet.create({
    data: {
      planet_name: 'Neptune',
      mass: 1.024e26,
      radius: 24622.0,
      diameter: 49244.0,
    },
  });

  console.log('Planets created successfully.');
}

createPlanets().finally(() => {
  prisma.$disconnect();
});
