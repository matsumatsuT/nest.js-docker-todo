import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator'

export class CreateTodoDto {
  @IsString()
  @MinLength(1)
  title: string

  @IsString()
  @IsOptional()
  description?: string

  // サーバー側でidをセットしたい
  // @Requestで取得できそう。認証機能が必要なので気が向いたらやる
  @IsNumber()
  userId: number
}

// Doneにするためのもの
export class UpdateTodoDto {
  @IsNumber()
  id: number
}

export class DeleteTodoDto {
  @IsNumber()
  id: number
}
