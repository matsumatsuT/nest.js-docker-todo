import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TodoService } from './todo.service'
import { Prisma, Todo } from '@prisma/client'
import { CreateTodoDto } from './dto/todo.dto'

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(@Body() data: Prisma.TodoWhereInput): Promise<Todo[]> {
    return this.todoService.todos(data)
  }

  @Post()
  async createTodo(@Body() data: CreateTodoDto): Promise<Todo> {
    return this.todoService.createTodo(data)
  }

  @Put(':id')
  async doneTodo(@Param('id') id: number): Promise<Todo> {
    return this.todoService.doneTodo({ id })
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number): Promise<Todo> {
    return this.todoService.deleteTodo({ id })
  }
}
