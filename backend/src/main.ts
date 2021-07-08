import 'dotenv/config';
import express from 'express';
import { createConnection } from 'typeorm';

import routes from './routes';

(async () => {
  const app = express();
  
  app.use(express.json());

  await createConnection();
  
  app.use(routes);
  
  app.listen(process.env.PORT ?? 3333);
})();