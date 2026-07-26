import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { stores } from "./store";

export const storeImages = pgTable("store_images", {
    id: serial("id").primaryKey(),

    storeId: integer("store_id")
        .references(() => stores.id, {
            onDelete: "cascade",
        })
        .notNull(),

    url: text("url").notNull(),
});