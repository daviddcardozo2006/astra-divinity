import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Servidor Express TypeScript en línea' });
});

app.listen(port, () => {
  console.log(`Backend escuchando en el puerto ${port}`);
});