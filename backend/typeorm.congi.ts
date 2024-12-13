import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { config } from 'dotenv'
import { join } from 'path'

config({ path: '.env' })

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.PORT),
  database: process.env.DATABASE,
  username: process.env.USER,
  password: process.env.PASSWORD,
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  synchronize: true,
  logging: false,
}
