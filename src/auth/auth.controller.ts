import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginAuthDto } from './dto/login.dto';
import { RegisterAuthDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authsService: AuthService) { }

    @Post('login')
    async login(@Res() res: Response, @Body() { document, password }: LoginAuthDto) {
        try {
            const { status, accessToken, message } = await this.authsService.login(document, password);
            res.status(status).json({
                status,
                data: {
                    accessToken,
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
    async register(@Res() res: Response, @Body() { organizatio, user, auth }: RegisterAuthDto) {
        try {
            const { status, message } = await this.authsService.register(organizatio, user, auth);
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
