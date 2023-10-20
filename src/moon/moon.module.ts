import { Module } from '@nestjs/common';
import { MoonController } from './moon.controller';
import { MoonService } from './moon.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MoonController],
  providers: [MoonService, PrismaService],
})
export class MoonModule {}
