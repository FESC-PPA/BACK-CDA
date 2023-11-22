import { Module } from '@nestjs/common';
import { AttendanceService } from './service/attendance.service';
import { AttendanceController } from './controller/attendance.controller';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule { }
