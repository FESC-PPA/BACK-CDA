import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Prisma } from '@prisma/client'
export class RegisterAuthDto {
    @IsNotEmpty()
    @IsString()
    organizatio: Prisma.OrganizationMinAggregateInputType;

    @IsString()
    @IsNotEmpty()
    user: Prisma.UserMinAggregateInputType;

    @IsString()
    @IsNotEmpty()
    auth: Prisma.AuthMinAggregateOutputType;
}
