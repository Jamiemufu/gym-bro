import type { Exercise } from "@/types/";
import { exercisesTable } from "../schema";

const exercises: Exercise[] = [
  // Chest (10)
  {
    name: "Barbell Bench Press", description: "Heavy compound horizontal press for maximal chest and triceps strength.", group: "chest", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Dumbbell Bench Press", description: "Unilateral pressing for improved range of motion and balanced strength.", group: "chest", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Incline Barbell Press", description: "Upper-chest emphasis to develop the clavicular head.", group: "chest", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Incline Dumbbell Press", description: "Upper chest press with greater stretch and stabilization demand.", group: "chest", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Decline Barbell Press", description: "Targets lower chest with a stronger pressing angle.", group: "chest", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Chest Dips", description: "Lean-forward dip to emphasise lower chest and triceps.", group: "chest", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Push Up", description: "Bodyweight horizontal press; scalable with variations and load.", group: "chest", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Dumbbell Fly", description: "Isolation movement to stretch and contract the pecs on a flat bench.", group: "chest", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Cable Crossover", description: "Standing cable fly for constant tension and midline squeeze.", group: "chest", equipment: "cable",
    userCreated: false
  },
  {
    name: "Pec Deck Fly", description: "Machine isolation for controlled chest contraction; beginner-friendly.", group: "chest", equipment: "cable",
    userCreated: false
  },

  // Back (10)
  {
    name: "Pull Up", description: "Vertical pulling fundamental for lats and upper-back strength.", group: "back", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Chin Up", description: "Underhand vertical pull emphasizing lats and biceps.", group: "back", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Bent-Over Barbell Row", description: "Heavy horizontal row for mid-back thickness and posterior chain stability.", group: "back", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Single-Arm Dumbbell Row", description: "Unilateral row to correct imbalances and target the lats.", group: "back", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "T-Bar Row", description: "Heavy mid-back builder with a chest-supported variant for stability.", group: "back", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Seated Cable Row", description: "Controlled horizontal pull with constant tension and varied grips.", group: "back", equipment: "cable",
    userCreated: false
  },
  {
    name: "Lat Pulldown", description: "Machine vertical pull to develop width and teach pulling mechanics.", group: "back", equipment: "cable",
    userCreated: false
  },
  {
    name: "Pendlay Row", description: "Strict barbell row from the floor for explosive and tight back strength.", group: "back", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Inverted Row", description: "Bodyweight horizontal pull that builds scapular control and mid-back strength.", group: "back", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Face Pull", description: "High-rep rear-delt and upper-back exercise to improve posture and shoulder health.", group: "back", equipment: "rope",
    userCreated: false
  },

  // Shoulders (10)
  {
    name: "Barbell Overhead Press", description: "Standing compound press for overall shoulder strength (delts & tri).", group: "shoulders", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Dumbbell Shoulder Press", description: "Seated/standing unilateral shoulder press for balanced strength.", group: "shoulders", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Push Press", description: "Explosive overhead press using leg drive to overload the delts.", group: "shoulders", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Arnold Press", description: "Rotational dumbbell press that hits all heads of the deltoid.", group: "shoulders", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Lateral Raise", description: "Isolation to build medial deltoid width and shoulder cap.", group: "shoulders", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Front Raise", description: "Isolation to emphasize the anterior deltoid and press carryover.", group: "shoulders", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Rear Delt Fly", description: "Reverse-fly for posterior deltoid and upper-back balance.", group: "shoulders", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Face Pull (rope)", description: "External-rotation-friendly rear delt and scapular health movement.", group: "shoulders", equipment: "rope",
    userCreated: false
  },
  {
    name: "Upright Row", description: "Vertical pull that targets traps and medial delts (use with care).", group: "shoulders", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Cable Lateral Raise", description: "Constant-tension lateral raise variation for smooth loading.", group: "shoulders", equipment: "cable",
    userCreated: false
  },

  // Legs (10)
  {
    name: "Back Squat", description: "Primary leg compound for quad, glute and overall strength.", group: "legs", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Front Squat", description: "Quad-dominant squat that also improves upright posture.", group: "legs", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Romanian Deadlift", description: "Hamstring and glute hinge to build posterior chain strength.", group: "legs", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Deadlift", description: "Full posterior chain compound for maximal strength and carryover.", group: "legs", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Leg Press", description: "Machine compound to load quads and glutes safely at high volume.", group: "legs", equipment: "cable",
    userCreated: false
  },
  {
    name: "Bulgarian Split Squat", description: "Single-leg squat that builds unilateral strength and balance.", group: "legs", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Walking Lunges", description: "Dynamic unilateral leg movement for quads, glutes and conditioning.", group: "legs", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Hamstring Curl (machine)", description: "Isolation for hamstring hypertrophy and knee health.", group: "legs", equipment: "cable",
    userCreated: false
  },
  {
    name: "Leg Extension", description: "Isolation to target the quadriceps and finish sets.", group: "legs", equipment: "cable",
    userCreated: false
  },
  {
    name: "Standing Calf Raise", description: "Calf isolation for gastrocnemius strength and development.", group: "legs", equipment: "cable",
    userCreated: false
  },

  // Arms (10)
  {
    name: "Barbell Curl", description: "Classic heavy biceps builder for mass.", group: "arms", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Dumbbell Hammer Curl", description: "Neutral-grip curl for brachialis and forearm strength.", group: "arms", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Preacher Curl", description: "Strict isolation curl to remove cheating and focus tension.", group: "arms", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Concentration Curl", description: "Single-arm peak-focused curl for strict contraction.", group: "arms", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Close-Grip Bench Press", description: "Compound triceps builder with pressing strength carryover.", group: "arms", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Triceps Pushdown", description: "Cable isolation to hit the lateral head and finish triceps.", group: "arms", equipment: "cable",
    userCreated: false
  },
  {
    name: "Overhead Triceps Extension", description: "Long-head focused triceps extension (dumbbell or cable).", group: "arms", equipment: "dumbbell",
    userCreated: false
  },
  {
    name: "Skull Crushers", description: "Lying triceps extension for heavy axial triceps work.", group: "arms", equipment: "barbell",
    userCreated: false
  },
  {
    name: "Dip (parallel bars)", description: "Compound chest/triceps builder — lean forward for chest, upright for triceps.", group: "arms", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Reverse Curl", description: "Forearm and brachioradialis emphasis; supports grip strength.", group: "arms", equipment: "barbell",
    userCreated: false
  },

  // Core (10)
  {
    name: "Plank", description: "Isometric anterior core stability and endurance exercise.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Side Plank", description: "Lateral core stability for obliques and hip control.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Hanging Leg Raise", description: "Powerful lower-abdominal and hip-flexor development.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Ab Wheel Rollout", description: "Challenging anti-extension core exercise for deep abs.", group: "core", equipment: "cable",
    userCreated: false
  },
  {
    name: "Russian Twist", description: "Rotational core exercise for obliques and anti-rotation strength.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Bicycle Crunch", description: "Dynamic abdominal exercise that hits rectus and obliques.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Cable Crunch", description: "Loaded crunch variation for progressive abdominal overload.", group: "core", equipment: "cable",
    userCreated: false
  },
  {
    name: "Mountain Climbers", description: "Dynamic core conditioning movement with hip-flexor demand.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Dead Bug", description: "Controlled anti-extension core drill for motor control.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
  {
    name: "Roman Chair Sit-Up", description: "Weighted sit-up option for higher-intensity core loading.", group: "core", equipment: "bodyweight",
    userCreated: false
  },
];

export const seedExercises = async (db: any) => {
  try {
    // Check if exercises already exist
    const existingExercises = await db.select().from(exercisesTable);

    if (existingExercises.length > 0) {
      console.log('Exercises already seeded, skipping...');
      return;
    }

    console.log('Seeding exercises...');
    for (const exercise of exercises) {
      await db.insert('exercises').values(exercise);
    }
    console.log(`Seeded ${exercises.length} exercises successfully`);
  } catch (error) {
    console.error('Error seeding exercises:', error);
    throw error; // Re-throw to let the caller handle it
  }
};