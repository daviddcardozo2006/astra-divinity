import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { ProductAttributes, ProductCreationAttributes } from '../interfaces/product.interface';

export class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
  
  // Torque total a Sequelize. Cero pérdida de datos en memoria.
  declare id: number;
  declare categoria_id: number;
  declare nombre: string;
  declare descripcion: string;
  declare precio: number;
  declare stock: number;
  declare talle: string;
  declare imagen_url: string;

}

Product.init(
  {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    categoria_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    descripcion: { 
      type: DataTypes.TEXT 
    },
    precio: { 
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false 
    },
    stock: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    talle: { 
      type: DataTypes.STRING 
    },
    imagen_url: { 
      type: DataTypes.STRING 
    },
  },
  { 
    sequelize, 
    modelName: 'Product', 
    tableName: 'productos', 
    timestamps: false 
  }
);