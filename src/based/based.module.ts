import { Module } from '@nestjs/common';
import { BasedService } from './based.service';
import { BasedController } from './based.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BasedController],
  providers: [BasedService, PrismaService],
})
export class BasedModule { }
