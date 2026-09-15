import { Optional } from 'sequelize';

export interface ProductAttributes {
  id: number;
  categoria_id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  talle: string;
  imagen_url: string;
}

// Bypass estricto: Estos 4 campos pueden faltar en un Product.create() sin romper el sistema.
export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id' | 'descripcion' | 'talle' | 'imagen_url'> {}