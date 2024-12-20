import { Injectable } from '@nestjs/common'
import { Prisma, Todo } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todos(data: Prisma.TodoWhereInput): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      where: {
        userId: data.userId,
      },
    })
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    })
  }

  async doneTodo(data: { where: Prisma.TodoWhereUniqueInput }): Promise<Todo> {
    return this.prisma.todo.update({
      where: {
        id: Number(data.where.id),
      },
      data: {
        done: true,
      },
    })
  }

  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({
      where: {
        id: Number(where.id),
      },
    })
  }
}
