import { db } from "@/db/db-init";
import { exercisesTable } from "@/db/schema"; // <-- Import your table schema
import type { Exercise } from "@/types";
import { eq } from "drizzle-orm";
import { useCallback, useEffect, useState } from "react";

// Shared state at module level
let sharedExercises: Exercise[] = [];
let subscribers: ((exercises: Exercise[]) => void)[] = [];

const notifySubscribers = () => {
  subscribers.forEach(callback => callback(sharedExercises));
};

const addSubscriber = (callback: (exercises: Exercise[]) => void) => {
  subscribers.push(callback);
  return () => {
    subscribers = subscribers.filter(sub => sub !== callback);
  };
};

/**
 * Hook to fetch all exercises
 */
export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>(sharedExercises);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExercises = useCallback(async () => {
    try {
      const result = await db.select().from(exercisesTable);
      sharedExercises = result;
      setExercises(result);
      notifySubscribers();
      setError(null);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch exercises");
    } finally {
      setLoading(false);
    }
  }, []);

  // Subscribe to shared state changes
  useEffect(() => {
    const unsubscribe = addSubscriber(setExercises);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (sharedExercises.length === 0) {
      fetchExercises();
    } else {
      setLoading(false);
    }
  }, [fetchExercises]);

  return { 
    exercises, 
    loading, 
    error, 
    refetch: fetchExercises
  };
}

/**
 * Hook to fetch a single exercise by ID
 */
export function useExercise(exerciseId: string | string[]) {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExercise = useCallback(async () => {
    try {
      if (!exerciseId) {
        setExercise(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      const id = Array.isArray(exerciseId) ? exerciseId[0] : exerciseId;
      const numericId = Number(id);
      
      if (isNaN(numericId)) {
        throw new Error("Invalid exercise ID");
      }

      const result = await db
        .select()
        .from(exercisesTable)
        .where(eq(exercisesTable.id, numericId));
        
      setExercise(result[0] || null);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch exercise");
      setExercise(null);
    } finally {
      setLoading(false);
    }
  }, [exerciseId]);

  useEffect(() => {
    fetchExercise();
  }, [exerciseId, fetchExercise]);

  return { exercise, loading, error, refetch: fetchExercise };
}

/**
 * Hook to create a new exercise
 */
export function useCreateExercise() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createExercise = async (exerciseData: Omit<Exercise, "id">) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await db
        .insert(exercisesTable)
        .values(exerciseData)
        .returning();
      
      // Add to shared state and notify all subscribers
      sharedExercises = [...sharedExercises, result[0]];
      notifySubscribers();
        
      return result[0];
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create exercise";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { createExercise, loading, error };
};

/**
 * Hook to delete an exercise
 */
export function useDeleteExercise() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteExercise = async (exerciseId: number) => {
    try {
      setLoading(true);
      setError(null);
      
      await db
        .delete(exercisesTable)
        .where(eq(exercisesTable.id, exerciseId));
      
      // Remove from shared state and notify all subscribers
      sharedExercises = sharedExercises.filter(exercise => exercise.id !== exerciseId);
      notifySubscribers();
        
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to delete exercise";
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { deleteExercise, loading, error };
};
