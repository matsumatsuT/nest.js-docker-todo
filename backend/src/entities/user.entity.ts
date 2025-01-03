import { User } from '@prisma/client'
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'

// implementsを使用することでUserモデルのプロパティを実装することを約束する
export class UserEntity implements User {
  @ApiProperty()
  id: number

  @ApiProperty()
  email: string

  @ApiProperty()
  name: string

  @ApiProperty()
  createdAt: Date

  @ApiHideProperty()
  password: string
}
