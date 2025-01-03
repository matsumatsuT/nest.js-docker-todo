import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { CreateUserDto, UserResponseDto } from './dto/user.dto'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: UserResponseDto, isArray: true })
  async getUsers(): Promise<User[]> {
    return this.userService.users()
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data)
  }
}
