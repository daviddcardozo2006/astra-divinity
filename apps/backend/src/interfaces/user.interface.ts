import { Optional } from 'sequelize';

export interface UserAttributes {
  id: string;
  nombre: string;
  email: string;
  password_hash: string;
  rol: 'cliente' | 'admin';
}

// Bypass: Al registrar un usuario, Postgres genera el ID y asigna el rol 'cliente' automáticamente.
export interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'rol'> {}