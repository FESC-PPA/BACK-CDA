import { Module } from '@nestjs/common'
import { FacialDataController } from 'src/controllers'
import { FacialDataService } from 'src/services'

@Module({
  controllers: [FacialDataController],
  providers: [FacialDataService],
})
export class FacialDataModule { }
