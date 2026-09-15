import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { CategoryAttributes, CategoryCreationAttributes } from '../interfaces/category.interface';

export class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  
  // Reemplazo estructural estricto. Cero fricción con TypeScript.
  declare id: number;
  declare nombre: string;
  declare categoria_padre_id: number | null;

}

Category.init(
  {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    categoria_padre_id: { 
      type: DataTypes.INTEGER, 
      allowNull: true,
      references: { model: 'categorias', key: 'id' } 
    },
  },
  { 
    sequelize, 
    modelName: 'Category', 
    tableName: 'categorias', 
    timestamps: false 
  }
);