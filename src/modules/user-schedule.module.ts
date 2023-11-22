import { Module } from '@nestjs/common'
import { UserScheduleController } from 'src/controllers'
import { UserScheduleService } from 'src/services'

@Module({
  controllers: [UserScheduleController],
  providers: [UserScheduleService],
})
export class UserScheduleModule { }
