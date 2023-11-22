import { Module } from '@nestjs/common'
import { BasedController } from 'src/controllers'
import { BasedService, PrismaService } from 'src/services'

@Module({
  controllers: [BasedController],
  providers: [BasedService, PrismaService],
})
export class BasedModule { }
