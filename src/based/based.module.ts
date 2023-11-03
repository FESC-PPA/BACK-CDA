import { Module } from '@nestjs/common';
import { BasedService } from './based.service';
import { BasedController } from './based.controller';

@Module({
  controllers: [BasedController],
  providers: [BasedService],
})
export class BasedModule {}
