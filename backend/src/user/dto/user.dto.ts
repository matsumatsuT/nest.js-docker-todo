import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @MinLength(1)
  name: string

  @IsString()
  @IsNotEmpty({ message: '入力必須' })
  @ApiProperty()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  @MinLength(1)
  name: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  email: string
}
