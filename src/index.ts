import 'dotenv/config';

import express from 'express';
import { initDatabase } from './initter';
import cors from 'cors';

(async () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await initDatabase();

  app.set('views', `${__dirname}/views`);
  app.set('view engine', 'ejs');

  app.get('/test', async (req, res) => {
    res.render('index');
  })
  
  app.get('/', async (req, res) => {
    res.sendStatus(200);
  });

  app.listen(3000, () => {
    console.log('app listening 3000 port..');
  })
})();