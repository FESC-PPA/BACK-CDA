import { HttpStatus } from '@nestjs/common';

export class AuthEntity {
    status: HttpStatus;
    message: string;
}
