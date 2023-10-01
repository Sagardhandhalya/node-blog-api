import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send({ cool: true });
});

app.get('/test', (req: Request, res: Response) => {
  res.send({ cool: 'cool again' });
});

app.listen(5000, () => {
  console.log('server is running....');
});
