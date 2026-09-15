import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { OrderItemAttributes, OrderItemCreationAttributes } from '../interfaces/order-item.interface';

export class OrderItem extends Model<OrderItemAttributes, OrderItemCreationAttributes> implements OrderItemAttributes {
  
  // Reemplazo estructural estricto. Cero 'public', cero '!:'
  declare id: number;
  declare orden_id: string;
  declare producto_id: number;
  declare cantidad: number;
  declare precio_unitario: number;

}

OrderItem.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    orden_id: { type: DataTypes.UUID, allowNull: false },
    producto_id: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    precio_unitario: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  { 
    sequelize, 
    modelName: 'OrderItem', 
    tableName: 'detalle_ordenes', 
    timestamps: false 
  }
);