import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Parámetro mecánico obligatorio para Neon Serverless
    }
  },
  logging: false, // Consola limpia, cero fricción visual
});

export default sequelize;