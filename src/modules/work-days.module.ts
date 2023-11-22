import { Module } from '@nestjs/common'
import { WorkDaysController } from 'src/controllers'
import { WorkDaysService } from 'src/services'

@Module({
  controllers: [WorkDaysController],
  providers: [WorkDaysService],
})
export class WorkDaysModule { }
