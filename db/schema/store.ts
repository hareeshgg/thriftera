import {
    boolean,
    decimal,
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
} from "drizzle-orm/pg-core";
import { owners } from "./owner";
import { tags } from "./tag";

export const storeStatusEnum = pgEnum("store_status", [
    "Active",
    "Suspended",
    "Closed",
]);

export const stores = pgTable("stores", {
    id: serial("id").primaryKey(),

    name: text("name").notNull(),

    slug: text("slug").notNull().unique(),

    latitude: decimal("latitude", { precision: 10, scale: 7 }),

    longitude: decimal("longitude", { precision: 10, scale: 7 }),

    address: text("address"),

    city: text("city"),

    state: text("state"),

    country: text("country"),

    phone: text("phone"),

    instagram: text("instagram"),

    website: text("website"),

    reviewCount: integer("review_count").default(0),

    averageRating: decimal("average_rating", {
        precision: 2,
        scale: 1,
    }).default("0"),

    status: storeStatusEnum("status")
        .default("Active")
        .notNull(),

    verified: boolean("verified").default(false),

    ownerId: integer("owner_id")
        .references(() => owners.id)
        .notNull(),

    tagId: integer("tag_id").references(() => tags.id),
});