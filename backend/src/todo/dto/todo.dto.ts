import { ApiProperty } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator'

export class GetTodoDto {
  @ApiProperty()
  @IsNumber()
  userId: number
}

export class CreateTodoDto {
  @ApiProperty()
  @IsString()
  @MinLength(1, { message: 'タイトルは入力必須です' })
  @IsNotEmpty()
  title: string

  @ApiProperty({ required: false, example: '説明はオプショナルです' })
  @IsString()
  @IsOptional()
  description?: string

  // サーバー側でidをセットしたい
  // @Requestで取得できそう。認証機能が必要なので気が向いたらやる
  @ApiProperty()
  @IsNumber()
  userId: number
}

// Doneにするためのもの
export class UpdateTodoDto {
  @ApiProperty()
  @IsNumber()
  id: number
}

export class DeleteTodoDto {
  @ApiProperty()
  @IsNumber()
  id: number
}

export class ResponseDto {
  @ApiProperty({
    description: 'メッセージ',
    example: 'success',
  })
  @IsString()
  message: string
}
