import { relations } from "drizzle-orm";

import { tags } from "../tag";
import { stores } from "../store";

export const tagRelations = relations(tags, ({ many }) => ({
    stores: many(stores),
}));