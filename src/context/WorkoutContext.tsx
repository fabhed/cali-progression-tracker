
import React, { createContext, useContext, useState, useEffect } from 'react';
import { WorkoutLog, ExerciseLog, SetLog, WorkoutTemplate } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { getWorkoutTemplate, getExerciseById } from '../data/progressions';

// Mock data storage (would be replaced with Supabase in a real implementation)
const LOCAL_STORAGE_KEY = 'calisthenics-workout-logs';

interface WorkoutContextType {
  currentWorkout: WorkoutLog | null;
  workoutHistory: WorkoutLog[];
  startWorkout: (template?: WorkoutTemplate) => void;
  addExercise: (exerciseId: string, exerciseName: string, progressionId?: string) => void;
  removeExercise: (exerciseLogId: string) => void;
  addSet: (exerciseLogId: string, set: Omit<SetLog, 'id'>) => void;
  updateSet: (exerciseLogId: string, setId: string, set: Partial<SetLog>) => void;
  removeSet: (exerciseLogId: string, setId: string) => void;
  completeWorkout: (notes?: string) => void;
  cancelWorkout: () => void;
  updateWorkoutName: (name: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentWorkout, setCurrentWorkout] = useState<WorkoutLog | null>(null);
  const [workoutHistory, setWorkoutHistory] = useState<WorkoutLog[]>([]);

  // Load workout history from localStorage on mount
  useEffect(() => {
    const savedLogs = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedLogs) {
      try {
        const parsedLogs = JSON.parse(savedLogs);
        // Convert string dates back to Date objects
        const processedLogs = parsedLogs.map((log: any) => ({
          ...log,
          date: new Date(log.date)
        }));
        setWorkoutHistory(processedLogs);
      } catch (error) {
        console.error('Error loading workout history:', error);
      }
    }
  }, []);

  // Save workout history to localStorage when it changes
  useEffect(() => {
    if (workoutHistory.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(workoutHistory));
    }
  }, [workoutHistory]);

  // Start a new workout, optionally based on a template
  const startWorkout = (template?: WorkoutTemplate) => {
    const newWorkout: WorkoutLog = {
      id: uuidv4(),
      date: new Date(),
      name: template?.name || 'Custom Workout',
      exercises: [],
      isComplete: false
    };

    if (template) {
      newWorkout.exercises = template.exercises.map(exercise => ({
        id: uuidv4(),
        exerciseId: exercise.exerciseId,
        exerciseName: exercise.name,
        progressionId: exercise.progressionId,
        sets: [],
        notes: ''
      }));
    }

    setCurrentWorkout(newWorkout);
  };

  // Add an exercise to the current workout
  const addExercise = (exerciseId: string, exerciseName: string, progressionId?: string) => {
    if (!currentWorkout) return;

    const exercise = getExerciseById(exerciseId);
    
    setCurrentWorkout(prev => {
      if (!prev) return null;
      return {
        ...prev,
        exercises: [
          ...prev.exercises,
          {
            id: uuidv4(),
            exerciseId,
            exerciseName: exerciseName || exercise?.name || 'Unknown Exercise',
            progressionId,
            sets: [],
            notes: ''
          }
        ]
      };
    });
  };

  // Remove an exercise from the current workout
  const removeExercise = (exerciseLogId: string) => {
    if (!currentWorkout) return;

    setCurrentWorkout(prev => {
      if (!prev) return null;
      return {
        ...prev,
        exercises: prev.exercises.filter(ex => ex.id !== exerciseLogId)
      };
    });
  };

  // Add a set to an exercise in the current workout
  const addSet = (exerciseLogId: string, set: Omit<SetLog, 'id'>) => {
    if (!currentWorkout) return;

    setCurrentWorkout(prev => {
      if (!prev) return null;
      
      return {
        ...prev,
        exercises: prev.exercises.map(ex => {
          if (ex.id === exerciseLogId) {
            return {
              ...ex,
              sets: [...ex.sets, { id: uuidv4(), ...set }]
            };
          }
          return ex;
        })
      };
    });
  };

  // Update a set in an exercise
  const updateSet = (exerciseLogId: string, setId: string, setUpdates: Partial<SetLog>) => {
    if (!currentWorkout) return;

    setCurrentWorkout(prev => {
      if (!prev) return null;
      
      return {
        ...prev,
        exercises: prev.exercises.map(ex => {
          if (ex.id === exerciseLogId) {
            return {
              ...ex,
              sets: ex.sets.map(set => {
                if (set.id === setId) {
                  return { ...set, ...setUpdates };
                }
                return set;
              })
            };
          }
          return ex;
        })
      };
    });
  };

  // Remove a set from an exercise
  const removeSet = (exerciseLogId: string, setId: string) => {
    if (!currentWorkout) return;

    setCurrentWorkout(prev => {
      if (!prev) return null;
      
      return {
        ...prev,
        exercises: prev.exercises.map(ex => {
          if (ex.id === exerciseLogId) {
            return {
              ...ex,
              sets: ex.sets.filter(set => set.id !== setId)
            };
          }
          return ex;
        })
      };
    });
  };

  // Complete the current workout and add it to history
  const completeWorkout = (notes?: string) => {
    if (!currentWorkout) return;

    const completedWorkout: WorkoutLog = {
      ...currentWorkout,
      isComplete: true,
      notes: notes || currentWorkout.notes,
      duration: Math.floor((new Date().getTime() - currentWorkout.date.getTime()) / 60000) // Duration in minutes
    };

    setWorkoutHistory(prev => [completedWorkout, ...prev]);
    setCurrentWorkout(null);
  };

  // Cancel the current workout without saving
  const cancelWorkout = () => {
    setCurrentWorkout(null);
  };

  // Update the name of the current workout
  const updateWorkoutName = (name: string) => {
    if (!currentWorkout) return;

    setCurrentWorkout(prev => {
      if (!prev) return null;
      return {
        ...prev,
        name
      };
    });
  };

  return (
    <WorkoutContext.Provider
      value={{
        currentWorkout,
        workoutHistory,
        startWorkout,
        addExercise,
        removeExercise,
        addSet,
        updateSet,
        removeSet,
        completeWorkout,
        cancelWorkout,
        updateWorkoutName
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider');
  }
  return context;
};
