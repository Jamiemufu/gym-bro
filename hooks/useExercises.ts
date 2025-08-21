import { db } from "@/db/db-init";
import { exercisesTable } from "@/db/schema";
import type { Exercise } from "@/types";
import { eq } from "drizzle-orm";
import { useCallback, useEffect, useState } from "react";

/**
 * Hook to fetch all exercises
 */
export function useExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExercises = async () => {
    try {
      setLoading(true);
      const result = await db.select().from(exercisesTable);
      setExercises(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch exercises");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  return { exercises, loading, error, refetch: fetchExercises };
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
