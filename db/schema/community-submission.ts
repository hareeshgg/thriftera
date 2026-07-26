import {
    decimal,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
} from "drizzle-orm/pg-core";

export const submissionStatusEnum = pgEnum("submission_status", [
    "Approved",
    "Rejected",
]);

export const communitySubmissions = pgTable("community_submissions", {
    id: serial("id").primaryKey(),

    name: text("name").notNull(),

    address: text("address"),

    latitude: decimal("latitude", {
        precision: 10,
        scale: 7,
    }),

    longitude: decimal("longitude", {
        precision: 10,
        scale: 7,
    }),

    submittedByName: text("submitted_by_name"),

    imgUrl: text("img_url"),

    status: submissionStatusEnum("status").default("Approved"),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
});