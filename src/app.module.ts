import { Module } from '@nestjs/common';
import { PlanetController } from './planet/planet.controller';
import { MoonController } from './moon/moon.controller';
import { PlanetService } from './planet/planet.service';
import { MoonService } from './moon/moon.service';
import { PrismaService } from './prisma.service';
import { PixelartController } from './pixelart/pixelart.controller';
import { PixelartService } from './pixelart/pixelart.service';

@Module({
  imports: [],
  controllers: [PlanetController, MoonController, PixelartController],
  providers: [PlanetService, MoonService, PrismaService, PixelartService],
})
export class AppModule {}
