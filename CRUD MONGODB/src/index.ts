import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import connect from './connect';
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req: Request, res: Response) => {
  const teste = req.body.teste;
  res.send(`Welcome to the Mongoose & TypeScript example ${teste}`)
}
);

app.listen(3000, () =>
  console.log('Aplicação rodando na porta 3000! 🚀')
);
const db = 'mongodb://localhost/uemg';
connect({ db });
routes({ app });
