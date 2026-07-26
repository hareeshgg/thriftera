import { relations } from "drizzle-orm";

import { owners } from "../owner";
import { stores } from "../store";

export const ownerRelations = relations(owners, ({ many }) => ({
    stores: many(stores),
}));