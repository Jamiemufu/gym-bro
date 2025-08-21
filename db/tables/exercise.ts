import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const exercisesTable = sqliteTable("exercises", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
  group: text({ enum: ["shoulders", "chest", "back", "legs", "arms", "core"] }).notNull(),
  equipment: text({ enum: ["dumbbell", "barbell", "cable", "bodyweight", "rope"] }).notNull(),
});