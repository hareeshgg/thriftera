import { relations } from "drizzle-orm";

import { productImages } from "../product-image";
import { products } from "../product";

export const productImageRelations = relations(productImages, ({ one }) => ({
    product: one(products, {
        fields: [productImages.productId],
        references: [products.id],
    }),
}));