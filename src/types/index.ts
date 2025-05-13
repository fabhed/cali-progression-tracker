
// Exercise Difficulty Levels
export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Elite';

// Progression Step interface
export interface ProgressionStep {
  id: string;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  image?: string;
  videoUrl?: string;
  prerequisites?: string[];
  tips?: string[];
}

// Progression Path interface
export interface ProgressionPath {
  id: string;
  name: string;
  category: string;
  description: string;
  steps: ProgressionStep[];
}

// Sets and Reps interface
export interface SetLog {
  id: string;
  reps?: number;
  duration?: number; // in seconds
  weight?: number; // for weighted exercises
  notes?: string;
}

// Exercise Log interface
export interface ExerciseLog {
  id: string;
  exerciseId: string;
  exerciseName: string;
  progressionId?: string;
  sets: SetLog[];
  notes?: string;
}

// Workout Log interface
export interface WorkoutLog {
  id: string;
  date: Date;
  name?: string;
  exercises: ExerciseLog[];
  duration?: number; // in minutes
  notes?: string;
  isComplete: boolean;
}

// Workout Template interface
export interface WorkoutTemplate {
  id: string;
  name: string;
  description?: string;
  exercises: {
    id: string;
    exerciseId: string;
    name: string;
    progressionId?: string;
    targetSets: number;
    targetReps?: number;
    targetDuration?: number;
  }[];
}

// User Profile interface
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  activeProgressions: string[]; // IDs of progressions the user is working on
  stats?: {
    workoutsCompleted: number;
    totalWorkoutTime: number; // in minutes
    longestStreak: number;
    currentStreak: number;
  };
}
