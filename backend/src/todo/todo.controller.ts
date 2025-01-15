import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common'
import { TodoService } from './todo.service'
import { Prisma } from '@prisma/client'
import { CreateTodoDto } from './dto/todo.dto'
import { ExcludePasswordInterceptor } from 'src/interceptor/transform.interceptor'
import { ApiOkResponse } from '@nestjs/swagger'
import { TodoEntity } from 'src/entities/todo.entity'
import { ResponseDto } from './dto/todo.dto'

@Controller('todo')
@UseInterceptors(ExcludePasswordInterceptor)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOkResponse({
    type: TodoEntity,
    isArray: true,
    description: 'TODOの取得',
  })
  async getTodos(@Body() data: Prisma.TodoWhereInput) {
    return this.todoService.todos(data)
  }

  @Post()
  @ApiOkResponse({
    type: TodoEntity,
    description: 'TODOの作成',
  })
  async createTodo(@Body() data: CreateTodoDto) {
    return this.todoService.createTodo(data)
  }

  @Put(':id')
  @ApiOkResponse({
    type: ResponseDto,
    description: 'TODOの完了',
  })
  async doneTodo(@Param('id') id: number) {
    return this.todoService.doneTodo({ id })
  }

  @Delete(':id')
  @ApiOkResponse({
    type: TodoEntity,
    description: 'TODOの削除',
  })
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo({ id })
  }
}
