import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlanetModule } from './planet/planet.module';
import { MoonModule } from './moon/moon.module';

@Module({
  imports: [PlanetModule, MoonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
