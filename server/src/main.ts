import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AccessTokenGuard } from './auth/access-token.guard';

const listenPost = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  console.log(`listen in http://localhost:${listenPost}`)

  

  await app.listen(listenPost);
}
bootstrap();
