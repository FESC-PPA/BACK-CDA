import { Module } from '@nestjs/common';
import { FacialDataService } from './facial-data.service';
import { FacialDataController } from './facial-data.controller';

@Module({
  controllers: [FacialDataController],
  providers: [FacialDataService],
})
export class FacialDataModule {}
