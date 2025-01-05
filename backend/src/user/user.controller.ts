import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger'
import { UserEntity } from 'src/entities/user.entity'
import { ExcludePasswordInterceptor } from 'src/interceptor/transform.interceptor'

@Controller('users')
@UseInterceptors(ExcludePasswordInterceptor)
@ApiTags('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({
    type: UserEntity,
    isArray: true,
    description: 'ユーザーの取得',
  })
  async getUsers() {
    return this.userService.users()
  }

  @Post('create')
  @ApiOperation({ summary: 'ユーザーの新規作成', operationId: 'createUser' })
  @ApiCreatedResponse({
    type: UserEntity,
    description: 'ユーザーの新規作成',
  })
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data)
  }

  @Patch('update/:id')
  @ApiOperation({ summary: 'ユーザーの更新', operationId: 'updateUser' })
  @ApiOkResponse({
    type: UserEntity,
    description: 'ユーザーの更新',
  })
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.updateUser({ where: { id: Number(id) }, data })
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: 'ユーザーの削除', operationId: 'deleteUser' })
  @ApiOkResponse({
    type: UserEntity,
    description: 'ユーザーの削除',
  })
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser({ id: Number(id) })
  }
}
