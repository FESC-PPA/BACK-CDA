import { Module } from '@nestjs/common';
import { WeekDaysService } from './week-days.service';
import { WeekDaysController } from './week-days.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [WeekDaysController],
  providers: [WeekDaysService, PrismaService],
})
export class WeekDaysModule { }
