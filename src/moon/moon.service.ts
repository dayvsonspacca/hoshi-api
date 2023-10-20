import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MoonService {
  constructor(private prisma: PrismaService) {}

  public getMoon(moon_name: string) {
    const moon = this.prisma.moon.findUnique({
      where: {
        moon_name,
      },
    });

    return moon;
  }

  public getMoons(planet_id: number) {
    const moons = this.prisma.moon.findMany({
      where: {
        planet_id,
      },
    });

    return moons;
  }
}
