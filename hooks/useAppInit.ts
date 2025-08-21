import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { seedExercises } from '../db/seed/exercises';
import migrations from '../drizzle/migrations';

// Create the database connection
export const db = drizzle(SQLite.openDatabaseSync('db') as any);

let hasInitialized = false;

export const useAppInit = () => {
  const [isInitialized, setIsInitialized] = useState(hasInitialized);
  const [initError, setInitError] = useState<string | null>(null);

  // Run migrations
  const { success: migrationsSuccess, error: migrationsError } = useMigrations(db, migrations as any);
  
  // Enable Drizzle Studio in development
  useDrizzleStudio(db as any);

  useEffect(() => {
    const initializeApp = async () => {
      if (hasInitialized) {
        setIsInitialized(true);
        return;
      }

      try {
        // Wait for migrations to complete
        if (!migrationsSuccess) {
          if (migrationsError) {
            throw new Error(`Migration failed: ${migrationsError.message}`);
          }
          return; // Still waiting for migrations
        }

        console.log('🚀 Initializing app database...');
        
        // Seed exercises if database is empty
        await seedExercises(db);
        
        hasInitialized = true;
        setIsInitialized(true);
        console.log('✅ App initialization complete');
        
      } catch (error) {
        console.error('❌ App initialization failed:', error);
        setInitError(error instanceof Error ? error.message : 'Unknown initialization error');
      }
    };

    initializeApp();
  }, [migrationsSuccess, migrationsError]);

  return {
    isInitialized,
    initError,
    db
  };
};
