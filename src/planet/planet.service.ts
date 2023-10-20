import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlanetService {
  constructor(private prisma: PrismaService) {}

  async getPlanet(planet_name: string) {
    const planet = await this.prisma.planet.findUnique({
      where: {
        planet_name,
      },
      include: {
        moons: true,
      },
    });

    return planet;
  }
}
