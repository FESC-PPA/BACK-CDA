import { Module } from '@nestjs/common';
import { ExcuseService } from './excuse.service';
import { ExcuseController } from './excuse.controller';

@Module({
  controllers: [ExcuseController],
  providers: [ExcuseService],
})
export class ExcuseModule {}
