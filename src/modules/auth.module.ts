import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from 'src/jwt.strategy'
import { AuthController } from 'src/controllers'
import { AuthService, PrismaService } from 'src/services'
import { UserModule } from './user.module'
const expires_in = parseInt(process.env.EXPIRES_IN)

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService],
  imports: [
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_CLAVE,
      signOptions: { expiresIn: expires_in }
    }),
    UserModule,
  ],
})
export class AuthModule { }
