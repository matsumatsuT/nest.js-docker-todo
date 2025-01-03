import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsString()
  password: string

  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string
}

export class UserResponseDto {
  @ApiResponseProperty()
  id: number

  @ApiResponseProperty()
  email: string

  @ApiResponseProperty()
  name: string
}
