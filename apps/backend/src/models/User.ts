import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';
import { UserAttributes, UserCreationAttributes } from '../interfaces/user.interface';

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  
  // Torque total. Estructura idéntica a tu código, pero ahora responde al contrato.
  declare id: string;
  declare nombre: string;
  declare email: string;
  declare password_hash: string;
  declare rol: 'cliente' | 'admin';

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
  { 
    sequelize, 
    modelName: 'User', 
    tableName: 'usuarios', 
    timestamps: false 
  }
);