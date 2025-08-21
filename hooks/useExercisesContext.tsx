import React, { createContext, useContext, useCallback, useEffect, useState } from "react";
import { db } from "@/db/db-init";
import { exercisesTable } from "@/db/schema";
import type { Exercise } from "@/types";

interface ExerciseContextType {
  exercises: Exercise[];
  loading: boolean;
  error: string | null;
  addExercise: (exercise: Exercise) => void;
  refetch: () => Promise<void>;
}

const ExerciseContext = createContext<ExerciseContextType | null>(null);

export function ExerciseProvider({ children }: { children: React.ReactNode }) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchExercises = useCallback(async () => {
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
  }, []);

  const addExercise = useCallback((exercise: Exercise) => {
    console.log('🚀 Adding exercise to shared state:', exercise.name);
    setExercises(prev => {
      const updated = [...prev, exercise];
      console.log('📝 Updated exercises count:', updated.length);
      return updated;
    });
  }, []);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
    <ExerciseContext.Provider value={{
      exercises,
      loading,
      error,
      addExercise,
      refetch: fetchExercises
    }}>
      {children}
    </ExerciseContext.Provider>
  );
}

export function useExercises() {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useExercises must be used within ExerciseProvider");
  }
  return context;
}
