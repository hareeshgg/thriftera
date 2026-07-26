import { relations } from "drizzle-orm";

import { orders } from "../order";
import { stores } from "../store";
import { orderItems } from "../order-item";

export const orderRelations = relations(orders, ({ one, many }) => ({
    store: one(stores, {
        fields: [orders.storeId],
        references: [stores.id],
    }),

    items: many(orderItems),
}));