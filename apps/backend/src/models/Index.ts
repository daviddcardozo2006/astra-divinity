import { User } from './User';
import { Category } from './Category';
import { Product } from './Product';
import { Order } from './Order';
import { OrderItem } from './Order-item';

// --- Relaciones de Categoría (Jerarquía) ---
Category.hasMany(Category, { as: 'subcategorias', foreignKey: 'categoria_padre_id' });
Category.belongsTo(Category, { as: 'categoria_padre', foreignKey: 'categoria_padre_id' });

// --- Relaciones Producto - Categoría (1,N) ---
Category.hasMany(Product, { foreignKey: 'categoria_id' });
Product.belongsTo(Category, { foreignKey: 'categoria_id' });

// --- Relaciones Usuario - Orden (1,N) ---
User.hasMany(Order, { foreignKey: 'usuario_id' });
Order.belongsTo(User, { foreignKey: 'usuario_id' });

// --- Relaciones Orden - Producto (N,M a través de Detalle_Ordenes) ---
Order.hasMany(OrderItem, { foreignKey: 'orden_id' });
OrderItem.belongsTo(Order, { foreignKey: 'orden_id' });

Product.hasMany(OrderItem, { foreignKey: 'producto_id' });
OrderItem.belongsTo(Product, { foreignKey: 'producto_id' });

// Exportamos todo encapsulado
export { User, Category, Product, Order, OrderItem };