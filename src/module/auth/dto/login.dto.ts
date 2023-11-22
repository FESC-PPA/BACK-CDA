import { IsNotEmpty, IsString, MinLength } from 'class-validator';
export class LoginAuthDto {
    @IsNotEmpty()
    @IsString()
    document: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
