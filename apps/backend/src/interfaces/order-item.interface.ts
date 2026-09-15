import { Optional } from "sequelize";

export interface OrderItemAttributes {
    id:number;
    orden_id:string;
    producto_id: number;
    cantidad: number;
    precio_unitario:number;
}
export interface OrderItemCreationAttributes extends Optional <OrderItemAttributes, 'id'>{}