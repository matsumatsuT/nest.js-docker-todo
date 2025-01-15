import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTodoDto, DeleteTodoDto, UpdateTodoDto } from './dto/todo.dto'

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todos(data: Prisma.TodoWhereInput) {
    return this.prisma.todo.findMany({
      where: {
        userId: data.userId,
      },
    })
  }

  async createTodo(data: CreateTodoDto) {
    return this.prisma.todo.create({
      data,
    })
  }

  async doneTodo(data: UpdateTodoDto) {
    await this.prisma.todo.findUnique({
      where: {
        id: Number(data.id),
      },
    })

    return { message: 'success' }
  }

  async deleteTodo(where: DeleteTodoDto) {
    return this.prisma.todo.delete({
      where: {
        id: Number(where.id),
      },
    })
  }
}
