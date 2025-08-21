import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
import migrations from '../drizzle/migrations';
import { seedExercises } from './seed/exercises';

export const db = drizzle(SQLite.openDatabaseSync('db') as any);

export default function InitDB() {
  useMigrations(db, migrations as any);
  useDrizzleStudio(db as any);
  seedExercises(db);
}
