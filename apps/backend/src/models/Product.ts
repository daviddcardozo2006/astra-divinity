import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Product extends Model {
  public id!: number;
  public categoria_id!: number;
  public nombre!: string;
  public descripcion!: string;
  public precio!: number;
  public stock!: number;
  public talle!: string;
  public imagen_url!: string;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    categoria_id: { type: DataTypes.INTEGER, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
    talle: { type: DataTypes.STRING },
    imagen_url: { type: DataTypes.STRING },
  },
  { sequelize, modelName: 'Product', tableName: 'productos', timestamps: false }
);