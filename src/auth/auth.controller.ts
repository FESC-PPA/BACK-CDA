import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LoginAuthDto } from './dto/login.dto';

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
                    error
                }
            });
        }
    }
}
