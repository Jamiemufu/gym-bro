export type Exercise = {
  id?: number;
  name: string;
  description: string;
  group: "shoulders" | "chest" | "back" | "legs" | "arms" | "core";
  equipment: "dumbbell" | "barbell" | "cable" | "bodyweight" | "rope";
  userCreated: boolean;
}
