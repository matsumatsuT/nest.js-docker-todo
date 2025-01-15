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
  async getTodoAll() {
    return this.todoService.todosAll()
  }

  @Get(':id')
  @ApiOkResponse({
    type: TodoEntity,
    isArray: true,
    description: 'TODOの取得(指定したidのみ)',
  })
  async getTodo(@Param('id') id: number) {
    return this.todoService.todos({ userId: id })
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
