import { Injectable, NotFoundException, UnauthorizedException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthEntity } from './auth.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService,) {

    }

    async login(email: string, password: string): Promise<AuthEntity> {
        const auth = await this.prismaService.auth.findFirst({
            where: { email, active: true },
            select: { user: true, password: true }
        });

        if (!auth) throw new NotFoundException('Usuario no encontrado');

        const isPasswordValid = await bcrypt.compare(password, auth.password);

        if (!isPasswordValid) throw new UnauthorizedException('Clave incorrecta');

        const accessToken: string = this.jwtService.sign({ userId: auth.user.userId });

        return {
            accessToken,
            message: `Bienvenido ${auth.user.firstName}`,
            status: HttpStatus.OK
        }
    }
}
