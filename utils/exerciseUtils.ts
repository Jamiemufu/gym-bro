import type { Exercise } from "@/types";
import Ionicons from "@expo/vector-icons/Ionicons";

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
 * Creates sections with custom exercises at the top, plus regular grouped sections
 * Custom exercises appear both in the "Custom" section AND their respective muscle group sections
 */
export function createSectionsWithCustom(exercises: Exercise[]): { title: string; data: Exercise[] }[] {
  const sections: { title: string; data: Exercise[] }[] = [];
  
  // Get all custom (user-created) exercises for the Custom section
  const customExercises = exercises.filter(exercise => exercise.userCreated);
  
  // Add Custom section at the top if there are any custom exercises
  if (customExercises.length > 0) {
    sections.push({
      title: "Custom",
      data: customExercises
    });
  }
  
  // Group all exercises by muscle group (including custom ones in their respective groups)
  const groups = exercises.reduce((acc, exercise) => {
    const { group } = exercise;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(exercise);
    return acc;
  }, {} as Record<string, Exercise[]>);
  
  // Convert groups to sections and add them
  const groupSections = Object.entries(groups).map(([title, data]) => ({ title, data }));
  sections.push(...groupSections);
  
  return sections;
}

/**
 * Gets the appropriate icon for a muscle group
 */
export function getGroupIcon(group: string): keyof typeof Ionicons.glyphMap {
  const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
    custom: 'person-add', // Special icon for custom exercises
    chest: 'body',
    back: 'fitness',
    legs: 'walk',
    shoulders: 'barbell',
    arms: 'hand-left',
    core: 'nuclear',
    cardio: 'heart',
  };
  return icons[group.toLowerCase()] || 'barbell';
}

/**
 * Gets the appropriate icon for equipment type
 */
export function getEquipmentIcon(equipment: string): keyof typeof Ionicons.glyphMap {
  const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
    barbell: 'barbell',
    dumbbell: 'fitness',
    cable: 'hardware-chip',
    bodyweight: 'person',
    rope: 'git-branch',
  };
  return icons[equipment.toLowerCase()] || 'barbell';
}
