import { Module } from '@nestjs/common'
import { AttendanceModule, AuthModule, BasedModule, ExcuseModule, FacialDataModule, OrganizationModule, ScheduleModule, UserModule, UserScheduleModule, WeekDaysModule, WorkDaysModule } from '.'
import { PrismaService } from 'src/services'

@Module({
  imports: [AuthModule, OrganizationModule, UserModule, BasedModule, ScheduleModule, WorkDaysModule, UserScheduleModule, AttendanceModule, ExcuseModule, FacialDataModule, WeekDaysModule],
  providers: [PrismaService],
})
export class AppModule { }
