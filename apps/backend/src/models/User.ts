import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class User extends Model {
  public id!: string; // Cambiado a string por el UUID
  public nombre!: string;
  public email!: string;
  public password_hash!: string;
  public rol!: 'cliente' | 'admin';
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('cliente', 'admin'),
      defaultValue: 'cliente',
    },
  },
  { sequelize, modelName: 'User', tableName: 'usuarios', timestamps: false }
);