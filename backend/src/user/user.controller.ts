import { Body, Controller, Get, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'
import { CreateUserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.users()
  }

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return this.userService.createUser(data)
  }
}
