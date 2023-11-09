import { IsNotEmpty, IsObject, IsString, MinLength } from 'class-validator';
import { Prisma } from '@prisma/client'
export class RegisterAuthDto {
    @IsNotEmpty()
    @IsObject()
    organizatio: Prisma.organizationCreateManyInput;

    @IsString()
    @IsObject()
    user: Prisma.userCreateManyInput;

    @IsString()
    @IsObject()
    auth: Prisma.authCreateManyInput;
}
