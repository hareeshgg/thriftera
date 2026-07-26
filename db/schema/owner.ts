import {
    pgTable,
    serial,
    text,
    timestamp,
    pgEnum,
} from "drizzle-orm/pg-core";

export const subscriptionStatusEnum = pgEnum("subscription_status", [
    "Free",
    "Premium",
    "Expired",
]);

export const owners = pgTable("owners", {
    id: serial("id").primaryKey(),

    name: text("name").notNull(),

    email: text("email").notNull().unique(),

    password: text("password").notNull(),

    subscriptionStatus: subscriptionStatusEnum("subscription_status")
        .notNull()
        .default("Free"),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});