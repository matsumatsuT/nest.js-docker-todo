import { IsEmail, IsString } from 'class-validator'

export class SignInDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
}

export class JwtPayload {
  sub: number
  email: string
  iat: number
  exp: number
}
