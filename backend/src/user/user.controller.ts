import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { CreateUserDto, UserGetResponseDto } from './dto/user.dto'
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({
    type: UserGetResponseDto,
    isArray: true,
    description: 'ユーザーの取得',
  })
  async getUsers(): Promise<User[]> {
    return this.userService.users()
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'ユーザーの新規作成',
  })
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data)
  }
}
