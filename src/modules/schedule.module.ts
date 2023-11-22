import { Module } from '@nestjs/common'
import { ScheduleController } from 'src/controllers'
import { PrismaService, ScheduleService } from 'src/services'

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService],
})
export class ScheduleModule { }
