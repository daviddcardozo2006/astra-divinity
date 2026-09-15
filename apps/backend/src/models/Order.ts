import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { OrdersAttributes, OrdersCreationAttributes } from '../interfaces/orders.interface';

export class Order extends Model<OrdersAttributes, OrdersCreationAttributes> implements OrdersAttributes {
  
  // Reemplazo estructural estricto. Torque total transferido a Sequelize.
  declare id: string;
  declare usuario_id: string;
  declare total_compra: number;
  declare estado: 'pendiente' | 'pagada' | 'cancelada';
  declare fecha_creacion: Date;

}

Order.init(
  {
    id: { 
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true 
    },
    usuario_id: { 
      type: DataTypes.UUID, 
      allowNull: false 
    },
    total_compra: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false 
    },
    estado: {
      type: DataTypes.ENUM('pendiente', 'pagada', 'cancelada'),
      defaultValue: 'pendiente',
    },
    fecha_creacion: { 
      type: DataTypes.DATE, 
      defaultValue: DataTypes.NOW 
    },
  },
  { 
    sequelize, 
    modelName: 'Order', 
    tableName: 'ordenes', 
    timestamps: false 
  }
);