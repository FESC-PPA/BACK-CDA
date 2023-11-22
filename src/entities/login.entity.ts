import { AuthEntity } from './auth.entity'

export class LoginEntity extends AuthEntity {
  access_token: string
  expires_in: number
}
