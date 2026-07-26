import {
    integer,
    numeric,
    pgTable,
    serial,
    text,
} from "drizzle-orm/pg-core";
import { orders } from "./order";
import { products } from "./product";

export const orderItems = pgTable("order_items", {
    id: serial("id").primaryKey(),

    orderId: integer("order_id")
        .references(() => orders.id, {
            onDelete: "cascade",
        })
        .notNull(),

    productId: integer("product_id").references(() => products.id),

    productName: text("product_name").notNull(),

    price: numeric("price", {
        precision: 10,
        scale: 2,
    }).notNull(),
});