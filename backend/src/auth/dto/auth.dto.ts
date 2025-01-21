import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class SignInDto {
  @IsEmail()
  @ApiProperty()
  email: string

  @IsString()
  @ApiProperty()
  password: string
}

export class SignInResponseDto {
  @ApiProperty()
  access_token: string
}

export class JwtPayload {
  sub: number
  email: string
  iat: number
  exp: number
}
