import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';
import { BasedModule } from './based/based.module';
import { ScheduleModule } from './schedule/schedule.module';
import { WorkDaysModule } from './work-days/work-days.module';
import { UserScheduleModule } from './user-schedule/user-schedule.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ExcuseModule } from './excuse/excuse.module';
import { FacialDataModule } from './facial-data/facial-data.module';

@Module({
  imports: [AuthModule, OrganizationModule, UserModule, BasedModule, ScheduleModule, WorkDaysModule, UserScheduleModule, AttendanceModule, ExcuseModule, FacialDataModule],
  providers: [PrismaService],
})
export class AppModule {}
