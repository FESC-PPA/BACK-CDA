import { Module } from '@nestjs/common'
import { AttendanceController } from 'src/controllers'
import { AttendanceService } from 'src/services'

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule { }
