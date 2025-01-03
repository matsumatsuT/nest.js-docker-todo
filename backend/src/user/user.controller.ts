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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { UserEntity } from 'src/entities/user.entity'
import { ExcludePasswordInterceptor } from 'src/interceptor/transform.interceptor'

@Controller('user')
@UseInterceptors(ExcludePasswordInterceptor)
@ApiTags('user')
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

  @Post()
  @ApiCreatedResponse({
    type: UserEntity,
    description: 'ユーザーの新規作成',
  })
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data)
  }

  @Patch(':id')
  @ApiOkResponse({
    type: UserEntity,
    description: 'ユーザーの更新',
  })
  async updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.updateUser({ where: { id: Number(id) }, data })
  }

  @Delete(':id')
  @ApiOkResponse({
    type: UserEntity,
    description: 'ユーザーの削除',
  })
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser({ id: Number(id) })
  }
}
