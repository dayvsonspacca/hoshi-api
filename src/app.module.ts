import { Module } from '@nestjs/common';
import { PlanetController } from './planet/planet.controller';
import { PlanetService } from './planet/planet.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [PlanetController],
  providers: [PlanetService, PrismaService],
})
export class AppModule {}
