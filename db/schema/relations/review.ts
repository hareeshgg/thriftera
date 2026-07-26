import { relations } from "drizzle-orm";

import { reviews } from "../review";
import { stores } from "../store";

export const reviewRelations = relations(reviews, ({ one }) => ({
    store: one(stores, {
        fields: [reviews.storeId],
        references: [stores.id],
    }),
}));