import { Injectable, NotFoundException, UnauthorizedException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { LoginEntity } from './entities/login.entity';
import * as bcrypt from 'bcrypt';
import { RegisterEntity } from './entities/register.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService,) {

    }

    async login(email: string, password: string): Promise<LoginEntity> {
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

    async register(organization, user, auth): Promise<RegisterEntity> {
        let existingOrganization = await this.prismaService.organization.findFirst({
            where: {
                OR: [
                    { nit: organization.nit },
                    { name: organization.name },
                ],
            },
        });

        // If organization does not exist, throw an error
        if (existingOrganization) throw new Error("Organization already exists");

        // If organization does not exist, create it
        existingOrganization = await this.prismaService.organization.create({
            data: organization,
        });

        // Set organizationOrganizationId for user
        user.organizationId = existingOrganization.organizationId;

        // Set roleRoleId for user
        user.roleRoleId = 1;

        // Create user
        const createdUser = await this.prismaService.user.create({
            data: user,
        });

        // Set userUserId for auth
        auth.userUserId = createdUser.userId;

        // Create auth
        const createdAuth = await this.prismaService.auth.create({
            data: auth,
        });

        return { message: "Registro exitoso", status: HttpStatus.CREATED };
    }
}
