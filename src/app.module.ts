import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { PrismaService } from './prisma.service';
import { OrganizationModule } from './module/organization/organization.module';
import { UserModule } from './module/user/user.module';
import { BasedModule } from './module/based/based.module';
import { ScheduleModule } from './module/schedule/schedule.module';
import { WorkDaysModule } from './module/work-days/work-days.module';
import { UserScheduleModule } from './module/user-schedule/user-schedule.module';
import { AttendanceModule } from './module/attendance/attendance.module';
import { ExcuseModule } from './module/excuse/excuse.module';
import { FacialDataModule } from './module/facial-data/facial-data.module';
import { WeekDaysModule } from './module/week-days/week-days.module';

@Module({
  imports: [AuthModule, OrganizationModule, UserModule, BasedModule, ScheduleModule, WorkDaysModule, UserScheduleModule, AttendanceModule, ExcuseModule, FacialDataModule, WeekDaysModule],
  providers: [PrismaService],
})
export class AppModule { }
