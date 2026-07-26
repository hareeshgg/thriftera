import {
    integer,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";
import { stores } from "./store";

export const reviews = pgTable("reviews", {
    id: serial("id").primaryKey(),

    storeId: integer("store_id")
        .references(() => stores.id, {
            onDelete: "cascade",
        })
        .notNull(),

    reviewerName: text("reviewer_name").notNull(),

    rating: integer("rating").notNull(),

    comment: text("comment"),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull(),
});