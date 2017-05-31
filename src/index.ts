import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fileEnv from 'dotenv-safe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

fileEnv.load();

const instance = express();
instance.use(bodyParser.json());

const app = NestFactory.create(AppModule, instance);

const PORT: number = process.env.APP_PORT || 3000;
app.listen(3000, () => console.log(`Listening on *:${PORT}`));