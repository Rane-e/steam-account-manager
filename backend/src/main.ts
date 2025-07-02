import './server-session';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { ResponseBodyInterceptor } from './logger/interceptors/response-body.interceptor';

async function bootstrap() {
  const server = express();
  server.use(express.json({ limit: '2mb' }));
  server.use(express.urlencoded({ extended: true }));

  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    bufferLogs: true,
    bodyParser: false,
    rawBody: true,
  });

  app.use(server);
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(
    new LoggerErrorInterceptor(), // ловит stack trace при 4xx/5xx
    new ResponseBodyInterceptor(), // добавляет тело 2xx/3xx
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
