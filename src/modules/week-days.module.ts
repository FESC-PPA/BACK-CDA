import { Module } from '@nestjs/common'
import { WeekDaysController } from 'src/controllers'
import { PrismaService, WeekDaysService } from 'src/services'

@Module({
  controllers: [WeekDaysController],
  providers: [WeekDaysService, PrismaService],
})
export class WeekDaysModule { }
