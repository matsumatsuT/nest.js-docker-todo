import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodoDto,
  UpdateTodoDto,
} from './dto/todo.dto'

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todosAll() {
    return this.prisma.todo.findMany()
  }

  async todos(data: GetTodoDto) {
    return this.prisma.todo.findMany({
      where: {
        userId: Number(data.userId), // getメソッドなのでString型になっているのでNumber型に変換
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
