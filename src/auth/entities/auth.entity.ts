import { HttpStatus } from '@nestjs/common';

export class AuthEntity {
  accessToken: string;
  status: HttpStatus;
  message: string;
}
