import { relations } from "drizzle-orm";

import { orderItems } from "../order-item";
import { orders } from "../order";
import { products } from "../product";

export const orderItemRelations = relations(orderItems, ({ one }) => ({
    order: one(orders, {
        fields: [orderItems.orderId],
        references: [orders.id],
    }),

    product: one(products, {
        fields: [orderItems.productId],
        references: [products.id],
    }),
}));