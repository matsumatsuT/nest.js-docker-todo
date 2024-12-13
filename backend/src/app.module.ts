import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoController } from './todo/todo.controller'
import { TodoService } from './todo/todo.service'
import { TodoModule } from './todo/todo.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeormConfig } from 'typeorm.congi'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), TodoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
