import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello world</h1>');
});

app.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
