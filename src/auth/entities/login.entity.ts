import { AuthEntity } from './auth.entity';

export class LoginEntity extends AuthEntity {
  accessToken: string;
}
