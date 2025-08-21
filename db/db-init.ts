import { db } from '../hooks/useAppInit';
import { exercisesTable } from './schema';

// Function to clear all exercises
export const clearExercises = async () => {
  try {
    await db.delete(exercisesTable);
    console.log('All exercises cleared from database');
  } catch (error) {
    console.error('Error clearing exercises:', error);
    throw error;
  }
};

// Function to force reseed exercises (bypasses existing check)
export const forceReseedExercises = async () => {
  try {
    // Import exercises data directly
    const { seedExercises } = await import('./seed/exercises');
    
    await seedExercises(db);
    
    console.log('Exercises force reseeded successfully');
  } catch (error) {
    console.error('Error force reseeding exercises:', error);
    throw error;
  }
};

// Re-export the database connection from the app initialization hook
export { db } from '../hooks/useAppInit';
