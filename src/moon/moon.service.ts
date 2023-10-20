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
}
