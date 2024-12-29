import { Injectable } from '@nestjs/common'
import { Prisma, Todo } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateTodoDto, DeleteTodoDto, UpdateTodoDto } from './dto/todo.dto'

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

  async createTodo(data: CreateTodoDto): Promise<Todo> {
    return this.prisma.todo.create({
      data,
    })
  }

  async doneTodo(data: UpdateTodoDto): Promise<Todo> {
    return this.prisma.todo.update({
      where: {
        id: Number(data.id),
      },
      data: {
        done: true,
      },
    })
  }

  async deleteTodo(where: DeleteTodoDto): Promise<Todo> {
    return this.prisma.todo.delete({
      where: {
        id: Number(where.id),
      },
    })
  }
}
