import { Module } from '@nestjs/common'
import { ExcuseController } from 'src/controllers'
import { ExcuseService } from 'src/services'

@Module({
  controllers: [ExcuseController],
  providers: [ExcuseService],
})
export class ExcuseModule { }
