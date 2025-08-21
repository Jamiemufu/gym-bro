import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
import migrations from '../drizzle/migrations';

export default function InitDB() {
  const expoDb = SQLite.openDatabaseSync('db');

  const db = drizzle(expoDb as any);
  useMigrations(db, migrations as any);
  useDrizzleStudio(expoDb as any);
}
