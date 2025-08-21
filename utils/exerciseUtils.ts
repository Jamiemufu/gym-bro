import type { Exercise } from "@/types";

/**
 * Groups exercises by their group property
 */
export function groupExercisesByGroup(exercises: Exercise[]): Record<string, Exercise[]> {
  return exercises.reduce((acc, exercise) => {
    const { group } = exercise;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);
}

/**
 * Filters exercises by search text (case-insensitive)
 */
export function filterExercisesByText(exercises: Exercise[], searchText: string): Exercise[] {
  if (!searchText.trim()) return exercises;
  
  const lowercaseSearch = searchText.toLowerCase();
  return exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(lowercaseSearch) ||
    exercise.description.toLowerCase().includes(lowercaseSearch) ||
    exercise.group.toLowerCase().includes(lowercaseSearch)
  );
}

/**
 * Converts grouped exercises to section list format
 */
export function exerciseGroupsToSections(groups: Record<string, Exercise[]>) {
  return Object.entries(groups).map(([title, data]) => ({ title, data }));
}
