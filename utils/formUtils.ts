import type { Exercise } from "@/types";

// Form data type for exercise creation
export type ExerciseFormData = {
  name: string;
  description: string;
  group: Exercise["group"] | "";
  equipment: Exercise["equipment"] | "";
};

// Constants
export const MUSCLE_GROUPS = ["shoulders", "chest", "back", "legs", "arms", "core"] as const;
export const EQUIPMENT_TYPES = ["dumbbell", "barbell", "cable", "bodyweight", "rope"] as const;

// Validation functions
export const validateExerciseForm = (formData: ExerciseFormData): string | null => {
  if (!formData.name.trim()) {
    return "Exercise name is required";
  }
  if (!formData.description.trim()) {
    return "Exercise description is required";
  }
  if (!formData.group) {
    return "Please select a muscle group";
  }
  if (!formData.equipment) {
    return "Please select equipment type";
  }
  return null;
};

// Transform form data for submission
export const transformFormDataForSubmission = (formData: ExerciseFormData): Omit<Exercise, "id"> => ({
  name: formData.name.trim(),
  description: formData.description.trim(),
  group: formData.group as Exercise["group"],
  equipment: formData.equipment as Exercise["equipment"],
  userCreated: true
});
