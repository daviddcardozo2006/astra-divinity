import { Optional } from "sequelize";

export interface OrdersAttributes {
    id:string;
    usuario_id: string;
    total_compra: number;
    estado: 'pendiente' | 'pagada' | 'cancelada';
    fecha_creacion: Date;
}
export interface OrdersCreationAttributes extends Optional<OrdersAttributes, 'id' | 'estado' | 'fecha_creacion'> {}