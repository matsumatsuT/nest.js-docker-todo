import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoController } from './todo/todo.controller'
import { TodoService } from './todo/todo.service'
import { TodoModule } from './todo/todo.module'
import { ConfigModule } from '@nestjs/config'
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'
import { PrismaService } from './prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth/auth.guard'

@Module({
  imports: [ConfigModule.forRoot(), TodoModule, UserModule, AuthModule],
  controllers: [AppController, TodoController, UserController],
  providers: [
    AppService,
    TodoService,
    UserService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
