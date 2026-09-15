import { Optional } from 'sequelize';

export interface CategoryAttributes {
  id: number;
  nombre: string;
  categoria_padre_id: number | null;
}

export interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}