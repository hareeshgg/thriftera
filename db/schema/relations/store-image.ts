import { relations } from "drizzle-orm";

import { storeImages } from "../store-image";
import { stores } from "../store";

export const storeImageRelations = relations(storeImages, ({ one }) => ({
    store: one(stores, {
        fields: [storeImages.storeId],
        references: [stores.id],
    }),
}));