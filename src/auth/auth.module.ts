import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
const expires_in = parseInt(process.env.EXPIRES_IN);

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
