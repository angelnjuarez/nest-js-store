import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Ignora los datos que no estan en el DTO
      forbidNonWhitelisted: true, //Devuelve un error si se envia un dato que no esta en el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
