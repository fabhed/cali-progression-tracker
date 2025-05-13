import { v4 as uuidv4 } from 'uuid';
import { ProgressionPath as AppProgressionPath, ProgressionStep } from '../types';

export interface Progression {
  id: string;
  name: string;
  description: string;
  category: string;  // Added category to match expected type
  paths: ProgressionPath[];
}

export interface ProgressionPath {
  id: string;
  name: string;
  description: string;
  levels: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl?: string;
  focus?: string[];
  muscles?: string[];
  equipment?: string[];
  difficulty?: string;
}

export interface WorkoutTemplate {
  id: string;
  name: string;
  description: string;
  exercises: {
    exerciseId: string;
    name: string;
    progressionId?: string;
    id: string;  // Added to match type definition
    targetSets: number;  // Added to match type definition
    targetReps?: number;  // Added to match type definition
    targetDuration?: number;  // Added to match type definition
  }[];
}

// Mock Data
export const progressions: Progression[] = [
  {
    id: 'push-up-progression',
    name: 'Push-Up Progression',
    description: 'A progression to learn and master the push-up.',
    category: 'Upper Body',  // Added category field
    paths: [
      {
        id: 'incline-push-ups',
        name: 'Incline Push-Ups',
        description: 'Push-ups performed with hands elevated.',
        levels: [
          {
            id: 'incline-push-up-1',
            name: 'Incline Push-Up - Wall',
            description: 'Push-ups against a wall.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: [],
          },
          {
            id: 'incline-push-up-2',
            name: 'Incline Push-Up - Table',
            description: 'Push-ups against a table.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: [],
          },
        ],
      },
      {
        id: 'knee-push-ups',
        name: 'Knee Push-Ups',
        description: 'Push-ups performed on the knees.',
        levels: [
          {
            id: 'knee-push-up-1',
            name: 'Knee Push-Up',
            description: 'Standard knee push-up.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: [],
          },
        ],
      },
      {
        id: 'assisted-push-ups',
        name: 'Assisted Push-Ups',
        description: 'Push-ups with resistance bands.',
        levels: [
          {
            id: 'assisted-push-up-1',
            name: 'Assisted Push-Up - Band',
            description: 'Push-ups with band assistance.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: ['Resistance Band'],
          },
        ],
      },
      {
        id: 'standard-push-ups',
        name: 'Standard Push-Ups',
        description: 'Classic push-ups on the toes.',
        levels: [
          {
            id: 'standard-push-up-1',
            name: 'Push-Up',
            description: 'Regular push-up on the floor.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: [],
          },
        ],
      },
      {
        id: 'decline-push-ups',
        name: 'Decline Push-Ups',
        description: 'Push-ups performed with feet elevated.',
        levels: [
          {
            id: 'decline-push-up-1',
            name: 'Decline Push-Up - Bench',
            description: 'Push-ups with feet on a bench.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Upper Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major (clavicular head)', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: ['Bench'],
          },
        ],
      },
      {
        id: 'archer-push-ups',
        name: 'Archer Push-Ups',
        description: 'Push-ups with emphasis on one arm.',
        levels: [
          {
            id: 'archer-push-up-1',
            name: 'Archer Push-Up',
            description: 'Push-up variation focusing on one arm at a time.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: [],
          },
        ],
      },
      {
        id: 'one-arm-push-ups',
        name: 'One-Arm Push-Ups',
        description: 'Advanced push-up performed on a single arm.',
        levels: [
          {
            id: 'one-arm-push-up-1',
            name: 'One-Arm Push-Up',
            description: 'Push-up performed using only one arm.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Chest', 'Shoulders', 'Triceps', 'Core'],
            muscles: ['Pectoralis Major', 'Anterior Deltoid', 'Triceps Brachii', 'Abdominals'],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 'squat-progression',
    name: 'Squat Progression',
    description: 'A progression to learn and master the squat.',
    category: 'Lower Body',  // Added category field
    paths: [
      {
        id: 'assisted-squats',
        name: 'Assisted Squats',
        description: 'Squats performed with assistance.',
        levels: [
          {
            id: 'assisted-squat-1',
            name: 'Assisted Squat - Chair',
            description: 'Squats using a chair for assistance.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: ['Chair'],
          },
          {
            id: 'assisted-squat-2',
            name: 'Assisted Squat - Band',
            description: 'Squats using a resistance band for assistance.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: ['Resistance Band'],
          },
        ],
      },
      {
        id: 'bodyweight-squats',
        name: 'Bodyweight Squats',
        description: 'Squats performed without any weight.',
        levels: [
          {
            id: 'bodyweight-squat-1',
            name: 'Bodyweight Squat',
            description: 'Standard squat without weight.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: [],
          },
        ],
      },
      {
        id: 'goblet-squats',
        name: 'Goblet Squats',
        description: 'Squats performed while holding a weight in front of the chest.',
        levels: [
          {
            id: 'goblet-squat-1',
            name: 'Goblet Squat - Dumbbell',
            description: 'Squats holding a dumbbell in front of the chest.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: ['Dumbbell'],
          },
          {
            id: 'goblet-squat-2',
            name: 'Goblet Squat - Kettlebell',
            description: 'Squats holding a kettlebell in front of the chest.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: ['Kettlebell'],
          },
        ],
      },
      {
        id: 'jump-squats',
        name: 'Jump Squats',
        description: 'Squats that end with a jump.',
        levels: [
          {
            id: 'jump-squat-1',
            name: 'Jump Squat',
            description: 'Squat followed by a jump.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings', 'Gastrocnemius'],
            equipment: [],
          },
        ],
      },
      {
        id: 'pistol-squats',
        name: 'Pistol Squats',
        description: 'Single leg squats.',
        levels: [
          {
            id: 'pistol-squat-1',
            name: 'Pistol Squat - Assisted',
            description: 'Single leg squat with assistance.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings', 'Balance'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: [],
          },
          {
            id: 'pistol-squat-2',
            name: 'Pistol Squat',
            description: 'Unassisted single leg squat.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Quads', 'Glutes', 'Hamstrings', 'Balance'],
            muscles: ['Quadriceps', 'Gluteus Maximus', 'Hamstrings'],
            equipment: [],
          },
        ],
      },
    ],
  },
  {
    id: 'pull-up-progression',
    name: 'Pull-Up Progression',
    description: 'A progression to learn and master the pull-up.',
    category: 'Upper Body',  // Added category field
    paths: [
      {
        id: 'vertical-pulls',
        name: 'Vertical Pulls',
        description: 'Pulling motions in a vertical plane.',
        levels: [
          {
            id: 'vertical-pull-1',
            name: 'Vertical Pull - Doorframe',
            description: 'Pulling using a doorframe.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Doorframe'],
          },
        ],
      },
      {
        id: 'inverted-rows',
        name: 'Inverted Rows',
        description: 'Pulling yourself up to a bar while horizontal.',
        levels: [
          {
            id: 'inverted-row-1',
            name: 'Inverted Row - Table',
            description: 'Pulling up to a table edge.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Table'],
          },
        ],
      },
      {
        id: 'assisted-pull-ups',
        name: 'Assisted Pull-Ups',
        description: 'Pull-ups with assistance.',
        levels: [
          {
            id: 'assisted-pull-up-1',
            name: 'Assisted Pull-Up - Band',
            description: 'Pull-ups with band assistance.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Resistance Band'],
          },
          {
            id: 'assisted-pull-up-2',
            name: 'Assisted Pull-Up - Machine',
            description: 'Pull-ups using an assisted pull-up machine.',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Assisted Pull-Up Machine'],
          },
        ],
      },
      {
        id: 'pull-ups',
        name: 'Pull-Ups',
        description: 'Classic pull-ups on a bar.',
        levels: [
          {
            id: 'pull-up-1',
            name: 'Pull-Up',
            description: 'Regular pull-up on a bar.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Pull-Up Bar'],
          },
        ],
      },
      {
        id: 'chin-ups',
        name: 'Chin-Ups',
        description: 'Pull-ups with an underhand grip.',
        levels: [
          {
            id: 'chin-up-1',
            name: 'Chin-Up',
            description: 'Pull-up with an underhand grip.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii'],
            equipment: ['Pull-Up Bar'],
          },
        ],
      },
      {
        id: 'muscle-ups',
        name: 'Muscle-Ups',
        description: 'Advanced move combining pull-up and dip.',
        levels: [
          {
            id: 'muscle-up-1',
            name: 'Muscle-Up',
            description: 'Pull-up transitioning into a dip.',
            videoUrl: 'https://www.youtube.com/watch?v=qF-y-6tK-uk',
            focus: ['Back', 'Biceps', 'Shoulders', 'Triceps'],
            muscles: ['Latissimus Dorsi', 'Biceps Brachii', 'Anterior Deltoid', 'Triceps Brachii'],
            equipment: ['Pull-Up Bar'],
          },
        ],
      },
    ],
  },
];

export const workoutTemplates: WorkoutTemplate[] = [
  {
    id: 'full-body-workout-1',
    name: 'Full Body Workout 1',
    description: 'A basic full body workout.',
    exercises: [
      { 
        id: uuidv4(),
        exerciseId: 'standard-push-up-1', 
        name: 'Push-Up', 
        progressionId: 'push-up-progression',
        targetSets: 3,
        targetReps: 10
      },
      { 
        id: uuidv4(),
        exerciseId: 'bodyweight-squat-1', 
        name: 'Bodyweight Squat', 
        progressionId: 'squat-progression',
        targetSets: 3,
        targetReps: 15
      },
      { 
        id: uuidv4(),
        exerciseId: 'inverted-row-1', 
        name: 'Inverted Row', 
        progressionId: 'pull-up-progression',
        targetSets: 3,
        targetReps: 8
      },
    ],
  },
  {
    id: 'upper-body-workout-1',
    name: 'Upper Body Workout 1',
    description: 'An upper body focused workout.',
    exercises: [
      { 
        id: uuidv4(),
        exerciseId: 'standard-push-up-1', 
        name: 'Push-Up', 
        progressionId: 'push-up-progression',
        targetSets: 4,
        targetReps: 12
      },
      { 
        id: uuidv4(),
        exerciseId: 'inverted-row-1', 
        name: 'Inverted Row', 
        progressionId: 'pull-up-progression',
        targetSets: 4,
        targetReps: 10
      },
    ],
  },
  {
    id: 'lower-body-workout-1',
    name: 'Lower Body Workout 1',
    description: 'A lower body focused workout.',
    exercises: [
      { 
        id: uuidv4(),
        exerciseId: 'bodyweight-squat-1', 
        name: 'Bodyweight Squat', 
        progressionId: 'squat-progression',
        targetSets: 4,
        targetReps: 15
      },
    ],
  },
];

export const getWorkoutTemplate = (templateId: string): WorkoutTemplate | undefined => {
  return workoutTemplates.find(template => template.id === templateId);
};

export const getExerciseById = (id: string) => {
  // Search through all exercise lists in all progressions
  for (const progression of progressions) {
    for (const path of progression.paths) {
      for (const level of path.levels) {
        if (level.id === id) {
          return level;
        }
      }
    }
  }
  return undefined;
};

// Added function to get all exercises for drop-down lists
export const getAllExercises = (): Exercise[] => {
  const exercises: Exercise[] = [];
  
  for (const progression of progressions) {
    for (const path of progression.paths) {
      for (const level of path.levels) {
        exercises.push({
          ...level,
          difficulty: path.name // Using path name as difficulty level
        });
      }
    }
  }
  
  return exercises;
};

// Added function to get progression by ID
export const getProgressionById = (progressionId: string): AppProgressionPath | undefined => {
  const progression = progressions.find(p => p.id === progressionId);
  if (!progression) return undefined;
  
  // Convert from internal progression format to app progression format
  const steps: ProgressionStep[] = [];
  for (const path of progression.paths) {
    for (const level of path.levels) {
      steps.push({
        id: level.id,
        name: level.name,
        description: level.description,
        difficulty: path.name as any, // Using path name as difficulty
        image: undefined,
        videoUrl: level.videoUrl,
        tips: level.focus
      });
    }
  }
  
  return {
    id: progression.id,
    name: progression.name,
    category: progression.category,
    description: progression.description,
    steps: steps
  };
};

// Convert progressions for UI display
export const convertToProgressionPaths = (): AppProgressionPath[] => {
  return progressions.map(progression => {
    // Convert from internal progression format to app progression format
    const steps: ProgressionStep[] = [];
    for (const path of progression.paths) {
      for (const level of path.levels) {
        steps.push({
          id: level.id,
          name: level.name,
          description: level.description,
          difficulty: path.name as any, // Using path name as difficulty
          image: undefined,
          videoUrl: level.videoUrl,
          tips: level.focus
        });
      }
    }
    
    return {
      id: progression.id,
      name: progression.name,
      category: progression.category,
      description: progression.description,
      steps: steps
    };
  });
};

// Replace existing function with modified version that uses the updated types
export const getCurrentProgressionLevel = (progressionId: string, exerciseId: string): ProgressionPath | undefined => {
  const progression = progressions.find(p => p.id === progressionId);
  if (!progression) return undefined;
  
  for (const path of progression.paths) {
    const level = path.levels.find(l => l.id === exerciseId);
    if (level) return path;
  }
  
  return undefined;
};
