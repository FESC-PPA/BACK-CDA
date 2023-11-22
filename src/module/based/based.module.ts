import { Module } from '@nestjs/common';
import { BasedService } from './service/based.service';
import { BasedController } from './controller/based.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BasedController],
  providers: [BasedService, PrismaService],
})
export class BasedModule { }
