import { relations } from "drizzle-orm";

import { categories } from "../category";
import { products } from "../product";

export const categoryRelations = relations(categories, ({ many }) => ({
    products: many(products),
}));