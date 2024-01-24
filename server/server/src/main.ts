import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const listenPost = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`listen in http://localhost:${listenPost}`)



  await app.listen(listenPost);
}
bootstrap();
