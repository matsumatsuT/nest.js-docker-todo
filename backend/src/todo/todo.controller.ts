import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TodoService } from './todo.service'
import { Prisma, Todo } from '@prisma/client'

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(@Body() data: Prisma.TodoWhereInput): Promise<Todo[]> {
    return this.todoService.todos(data)
  }

  @Post()
  async createTodo(@Body() data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.todoService.createTodo(data)
  }

  @Put(':id')
  async doneTodo(@Param('id') id: number): Promise<Todo> {
    return this.todoService.doneTodo({
      where: { id },
    })
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<Todo> {
    return this.todoService.deleteTodo({ id })
  }
}
