import {
    integer,
    numeric,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";
import { stores } from "./store";
import { categories } from "./category";

export const productStatusEnum = pgEnum("product_status", [
    "Available",
    "Sold",
    "Hidden",
]);

export const products = pgTable("products", {
    id: serial("id").primaryKey(),

    name: text("name").notNull(),

    description: text("description"),

    price: numeric("price", {
        precision: 10,
        scale: 2,
    }).notNull(),

    size: text("size"),

    condition: text("condition"),

    status: productStatusEnum("status")
        .default("Available")
        .notNull(),

    storeId: integer("store_id")
        .references(() => stores.id)
        .notNull(),

    categoryId: integer("category_id")
        .references(() => categories.id)
        .notNull(),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull(),
});