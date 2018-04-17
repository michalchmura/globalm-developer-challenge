'use strict';

import Koa from 'koa';

import logger from 'koa-logger';
import json from 'koa-json';
import mount from 'koa-mount';
import body from 'koa-body';
import koa_router from 'koa-router';

import db from './models';
import controllers from './controllers';

import { config, db_connect } from './config';

const app = new Koa();

app
  .use(logger())
  .use(json())
  .use(body({
    formidable: { keepExtensions: true },
    patchNode: true,
    multipart: true,
  }));

// routing
let candidates_router = koa_router();

candidates_router.post('/', controllers.candidates.create);
candidates_router.put('/:id', controllers.candidates.update);
candidates_router.get('/', controllers.candidates.index);
candidates_router.get('/:id', controllers.candidates.show);

app.use(mount('/api/candidates', candidates_router.routes()));

db_connect(config.mongo_uri);
console.log(`Connected to MongoDB (${config.mongo_uri}).`);
app.listen(config.port);
console.log(`Koa server listening on ${config.port}.`);