import { Injectable, NotFoundException, UnauthorizedException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginEntity } from '../entities/login.entity';
import * as bcrypt from 'bcrypt';
import { RegisterEntity } from '../entities/register.entity';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
const roundsOfHashing = parseInt(process.env.ROUNDS_OF_HASHING)
const expires_in = parseInt(process.env.EXPIRES_IN)
@Injectable()
export class AuthService {
    constructor(private prismaService: PrismaService, private jwtService: JwtService,) {

    }

    async login(email: string, password: string): Promise<LoginEntity> {
        const auth = await this.prismaService.auth.findFirst({
            where: { email, active: true },
            select: { user: true, password: true }
        })

        if (!auth) throw new NotFoundException('Usuario no encontrado')

        const isPasswordValid = await bcrypt.compare(password, auth.password)

        if (!isPasswordValid) throw new UnauthorizedException('Clave incorrecta')

        const access_token: string = this.jwtService.sign({ userId: auth.user.userId })

        return {
            access_token,
            expires_in,
            message: `Bienvenido ${auth.user.firstName}`,
            status: HttpStatus.OK
        }
    }

    async register(organization: Prisma.organizationCreateManyInput, user: Prisma.userCreateManyInput, auth: Prisma.authCreateManyInput): Promise<RegisterEntity> {
        let existingOrganization: Prisma.OrganizationMinAggregateOutputType = await this.prismaService.organization.findFirst({
            where: {
                OR: [
                    { nit: organization.nit }
                ],
            },
        })
        if (existingOrganization) throw new NotFoundException("Organization already exists")

        let existingUser: Prisma.UserMinAggregateOutputType = await this.prismaService.user.findFirst({
            where: {
                OR: [
                    { identify: user.identify }
                ],
            },
        })
        if (existingUser) throw new NotFoundException("User already exists")

        const createOrganization: Prisma.OrganizationMinAggregateOutputType = await this.prismaService.organization.create({
            data: organization,
        })

        user.organizationId = createOrganization.organizationId;
        user.roleRoleId = 1;
        const createdUser = await this.prismaService.user.create({
            data: user,
        })

        auth.userUserId = createdUser.userId;
        const hashedPassword: string = await bcrypt.hashSync(auth.password, roundsOfHashing,)
        auth.password = hashedPassword;
        const createdAuth = await this.prismaService.auth.create({
            data: auth,
        })

        return { message: "Registro exitoso", status: HttpStatus.CREATED };
    }
}
