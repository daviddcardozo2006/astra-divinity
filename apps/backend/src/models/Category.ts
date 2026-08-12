import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Category extends Model {
  public id!: number;
  public nombre!: string;
  public categoria_padre_id!: number | null;
}

Category.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    categoria_padre_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true,
      references: { model: 'categorias', key: 'id' } 
    },
  },
  { sequelize, modelName: 'Category', tableName: 'categorias', timestamps: false }
);