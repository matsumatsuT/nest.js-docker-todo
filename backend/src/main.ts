import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { dump } from 'js-yaml'
import * as fs from 'fs'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //不要なDTOフィールドを削除
      forbidNonWhitelisted: true, //不要なDTOフィールドがある場合はエラーを返す
    }),
  )
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Todo API')
    .setDescription('Todo API Documentation')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  // フォルダが存在しない場合は作成
  const outputDir = '../openApi'
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  fs.writeFileSync(`${outputDir}/swagger-spec.yaml`, dump(document, {}))

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
