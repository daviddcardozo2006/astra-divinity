import express, { Request, Response } from 'express';
import sequelize from './db';
import './models/User'; // Carga el modelo para que Sequelize lo registre

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Servidor Express TypeScript en línea' });
});

// Función de ignición asíncrona
const startServer = async () => {
  try {
    // Autentica la conexión con PostgreSQL
    await sequelize.authenticate();
    // eslint-disable-next-line no-console
    console.log('Conexión a la base de datos establecida con éxito.');

    // Sincroniza los modelos (crea la tabla users si no existe)
    await sequelize.sync({ alter: true });
    // eslint-disable-next-line no-console
    console.log('Modelos sincronizados correctamente.');

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend escuchando en el puerto ${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Fallo crítico al conectar con la base de datos:', error);
  }
};

startServer();