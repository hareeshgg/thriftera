import { relations } from "drizzle-orm";

import { products } from "../product";
import { stores } from "../store";
import { categories } from "../category";
import { productImages } from "../product-image";
import { orderItems } from "../order-item";

export const productRelations = relations(products, ({ one, many }) => ({
    store: one(stores, {
        fields: [products.storeId],
        references: [stores.id],
    }),

    category: one(categories, {
        fields: [products.categoryId],
        references: [categories.id],
    }),

    images: many(productImages),

    orderItems: many(orderItems),
}));