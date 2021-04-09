import * as dotenv from 'dotenv';

import { json } from 'body-parser';
import express, { Application } from 'express';

import { courierRouter } from './router/courier';

import './database';

const app: Application = express();

app.use(json());
app.use(courierRouter);

export default app;
