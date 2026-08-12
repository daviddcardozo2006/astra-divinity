import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class OrderItem extends Model {
  public id!: number;
  public orden_id!: string;
  public producto_id!: number;
  public cantidad!: number;
  public precio_unitario!: number;
}

OrderItem.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orden_id: { type: DataTypes.UUID, allowNull: false },
    producto_id: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precio_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  { sequelize, modelName: 'OrderItem', tableName: 'detalle_ordenes', timestamps: false }
);