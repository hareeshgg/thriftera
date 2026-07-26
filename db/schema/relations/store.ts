import { relations } from "drizzle-orm";

import { stores } from "../store";
import { owners } from "../owner";
import { tags } from "../tag";
import { products } from "../product";
import { storeImages } from "../store-image";
import { reviews } from "../review";
import { orders } from "../order";

export const storeRelations = relations(stores, ({ one, many }) => ({
    owner: one(owners, {
        fields: [stores.ownerId],
        references: [owners.id],
    }),

    tag: one(tags, {
        fields: [stores.tagId],
        references: [tags.id],
    }),

    products: many(products),

    images: many(storeImages),

    reviews: many(reviews),

    orders: many(orders),
}));