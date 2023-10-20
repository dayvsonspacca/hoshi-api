import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { PrismaService } from 'src/prisma.service';
import { MoonService } from 'src/moon/moon.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetService, PrismaService, MoonService],
})
export class PlanetModule {}
