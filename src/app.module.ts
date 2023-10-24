import { Module } from '@nestjs/common';
import { PlanetController } from './planet/planet.controller';
import { MoonController } from './moon/moon.controller';
import { PlanetService } from './planet/planet.service';
import { MoonService } from './moon/moon.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [PlanetController, MoonController],
  providers: [PlanetService, MoonService, PrismaService],
})
export class AppModule {}
