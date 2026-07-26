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

export const orderStatusEnum = pgEnum("order_status", [
    "Pending",
    "Confirmed",
    "Shipped",
    "Delivered",
    "Cancelled",
]);

export const orders = pgTable("orders", {
    id: serial("id").primaryKey(),

    customerName: text("customer_name").notNull(),

    customerMail: text("customer_mail").notNull(),

    customerAddress: text("customer_address"),

    customerPhone: text("customer_phone"),

    status: orderStatusEnum("status")
        .default("Pending")
        .notNull(),

    total: numeric("total", {
        precision: 10,
        scale: 2,
    }).notNull(),

    storeId: integer("store_id")
        .references(() => stores.id)
        .notNull(),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
});