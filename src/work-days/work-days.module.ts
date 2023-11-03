import { Module } from '@nestjs/common';
import { WorkDaysService } from './work-days.service';
import { WorkDaysController } from './work-days.controller';

@Module({
  controllers: [WorkDaysController],
  providers: [WorkDaysService],
})
export class WorkDaysModule {}
