import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { Response } from 'express';
import { LoginAuthDto } from '../dto/login.dto';
import { RegisterAuthDto } from '../dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authsService: AuthService) { }

    @Post('login')
    async login(@Res() res: Response, @Body() { document, password }: LoginAuthDto) {
        try {
            const { status, access_token, message } = await this.authsService.login(document, password);
            res.status(status).json({
                status,
                data: {
                    access_token,
                    message
                }
            });
        } catch (error) {
            res.status(error.status).json({
                status: error.status,
                data: {
                    message: error.message
                }
            });
        }
    }
    @Post('register')
    async register(@Res() res: Response, @Body() { organization, user, auth }: RegisterAuthDto) {
        try {
            const { status, message } = await this.authsService.register(organization, user, auth);
            res.status(status).json({
                status,
                data: {
                    message
                }
            });
        } catch (error) {
            res.status(error.status).json({
                status: error.status,
                data: {
                    message: error.message
                }
            });
        }
    }
}
