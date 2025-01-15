import { Todo } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export class TodoEntity implements Todo {
  @ApiProperty()
  id: number

  @ApiProperty()
  title: string

  @ApiProperty()
  description: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  userId: number

  @ApiProperty()
  done: boolean
}
