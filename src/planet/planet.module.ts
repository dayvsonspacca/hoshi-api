import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetService, PrismaService],
})
export class PlanetModule {}
