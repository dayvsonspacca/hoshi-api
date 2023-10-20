import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlanetModule } from './planet/planet.module';

@Module({
  imports: [PlanetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
