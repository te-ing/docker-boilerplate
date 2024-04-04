import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/app/secrets/key.pem'),
    cert: fs.readFileSync('/app/secrets/cert.pem'),
  };
  const appOptions = { cors: true, httpsOptions };
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    appOptions,
  );
  await app.listen(3000);
}
bootstrap();
