import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join, resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(3000);
  app.useStaticAssets(resolve('./src/public'));
  app.setBaseViewsDir(resolve('./src/views'));
  app.setViewEngine('ejs');
}
bootstrap();
