import { Module } from '@nestjs/common'
import { UserController } from 'src/controllers'
import { PrismaService, UserService } from 'src/services'

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UserModule { }
