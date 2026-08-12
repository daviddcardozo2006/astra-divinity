import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export class Order extends Model {
  public id!: string;
  public usuario_id!: string;
  public total_compra!: number;
  public estado!: 'pendiente' | 'pagada' | 'cancelada';
  public fecha_creacion!: Date;
}

Order.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    usuario_id: { type: DataTypes.UUID, allowNull: false },
    total_compra: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    estado: {
      type: DataTypes.ENUM('pendiente', 'pagada', 'cancelada'),
      defaultValue: 'pendiente',
    },
    fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: 'Order', tableName: 'ordenes', timestamps: false }
);