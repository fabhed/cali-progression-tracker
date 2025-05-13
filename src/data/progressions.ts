
import { ProgressionPath } from '../types';

export const progressions: ProgressionPath[] = [
  {
    id: 'pull-ups',
    name: 'Pull-up Progression',
    category: 'Pull',
    description: 'Master the pull-up from dead hang to muscle-up',
    steps: [
      {
        id: 'negative-pull-ups',
        name: 'Negative Pull-ups',
        description: 'Jump to the top position and slowly lower yourself down',
        difficulty: 'Beginner',
        tips: ['Focus on a slow descent', 'Aim for 5-10 second lowering phase']
      },
      {
        id: 'assisted-pull-ups',
        name: 'Assisted Pull-ups',
        description: 'Use resistance bands or assisted machine to help with pull-ups',
        difficulty: 'Beginner',
        tips: ['Gradually decrease assistance', 'Focus on proper form']
      },
      {
        id: 'chin-ups',
        name: 'Chin-ups',
        description: 'Palms facing you, pull yourself up to the bar',
        difficulty: 'Beginner',
        tips: ['Keep elbows close to body', 'Pull until chin over bar']
      },
      {
        id: 'pull-ups',
        name: 'Pull-ups',
        description: 'Palms facing away, pull yourself up to the bar',
        difficulty: 'Intermediate',
        tips: ['Engage your lats', 'Keep shoulders down away from ears']
      },
      {
        id: 'weighted-pull-ups',
        name: 'Weighted Pull-ups',
        description: 'Pull-ups with additional weight',
        difficulty: 'Advanced',
        tips: ['Start with small weight increments', 'Maintain strict form']
      },
      {
        id: 'l-sit-pull-ups',
        name: 'L-Sit Pull-ups',
        description: 'Perform pull-ups while holding an L-sit position',
        difficulty: 'Advanced',
        tips: ['Keep legs straight and together', 'Maintain the L position throughout']
      },
      {
        id: 'muscle-up',
        name: 'Muscle-up',
        description: 'Pull-up transitioning to a dip, ending above the bar',
        difficulty: 'Elite',
        tips: ['Explosive pull', 'Practice the transition separately']
      }
    ]
  },
  {
    id: 'push-ups',
    name: 'Push-up Progression',
    category: 'Push',
    description: 'Master the push-up from knee to one-arm variations',
    steps: [
      {
        id: 'wall-push-ups',
        name: 'Wall Push-ups',
        description: 'Push-ups against a wall',
        difficulty: 'Beginner',
        tips: ['Keep body straight', 'Step further from wall to increase difficulty']
      },
      {
        id: 'incline-push-ups',
        name: 'Incline Push-ups',
        description: 'Push-ups with hands on an elevated surface',
        difficulty: 'Beginner',
        tips: ['Lower the incline gradually', 'Keep core engaged']
      },
      {
        id: 'knee-push-ups',
        name: 'Knee Push-ups',
        description: 'Push-ups from knees instead of toes',
        difficulty: 'Beginner',
        tips: ['Keep hips aligned with shoulders', 'Lower chest to ground']
      },
      {
        id: 'push-ups',
        name: 'Push-ups',
        description: 'Standard push-ups from toes',
        difficulty: 'Intermediate',
        tips: ['Keep body in straight line', 'Lower until chest nearly touches ground']
      },
      {
        id: 'diamond-push-ups',
        name: 'Diamond Push-ups',
        description: 'Push-ups with hands close together forming a diamond',
        difficulty: 'Intermediate',
        tips: ['Keep elbows close to body', 'Focus on tricep engagement']
      },
      {
        id: 'decline-push-ups',
        name: 'Decline Push-ups',
        description: 'Push-ups with feet elevated',
        difficulty: 'Advanced',
        tips: ['Higher elevation increases difficulty', 'Maintain straight body line']
      },
      {
        id: 'archer-push-ups',
        name: 'Archer Push-ups',
        description: 'Push-ups where one arm extends sideways while the other bends',
        difficulty: 'Advanced',
        tips: ['Fully extend one arm', 'Alternate sides']
      },
      {
        id: 'one-arm-push-up',
        name: 'One-arm Push-up',
        description: 'Push-up using only one arm',
        difficulty: 'Elite',
        tips: ['Start with feet wide', 'Progress from archer push-ups']
      }
    ]
  },
  {
    id: 'dips',
    name: 'Dip Progression',
    category: 'Push',
    description: 'Master dips from bench to rings',
    steps: [
      {
        id: 'bench-dips',
        name: 'Bench Dips',
        description: 'Dips performed with hands on a bench and feet on floor',
        difficulty: 'Beginner',
        tips: ['Keep shoulders down', 'Lower until upper arms are parallel to floor']
      },
      {
        id: 'assisted-dips',
        name: 'Assisted Dips',
        description: 'Dips with assistance from bands or machine',
        difficulty: 'Beginner',
        tips: ['Decrease assistance gradually', 'Focus on full range of motion']
      },
      {
        id: 'parallel-bar-dips',
        name: 'Parallel Bar Dips',
        description: 'Full dips on parallel bars',
        difficulty: 'Intermediate',
        tips: ['Lower until shoulders are below elbows', 'Keep slight forward lean']
      },
      {
        id: 'weighted-dips',
        name: 'Weighted Dips',
        description: 'Dips with additional weight',
        difficulty: 'Advanced',
        tips: ['Add weight gradually', 'Maintain proper form']
      },
      {
        id: 'ring-dips',
        name: 'Ring Dips',
        description: 'Dips performed on gymnastics rings',
        difficulty: 'Advanced',
        tips: ['Stabilize the rings', 'Turn rings out at top position']
      },
      {
        id: 'korean-dips',
        name: 'Korean Dips',
        description: 'Starting from support position, lean forward until shoulders are over hands',
        difficulty: 'Elite',
        tips: ['Start with small lean', 'Keep arms straight']
      }
    ]
  },
  {
    id: 'squats',
    name: 'Squat Progression',
    category: 'Legs',
    description: 'Develop leg strength from basic to advanced squat variations',
    steps: [
      {
        id: 'assisted-squats',
        name: 'Assisted Squats',
        description: 'Squats holding onto support',
        difficulty: 'Beginner',
        tips: ['Focus on depth', 'Use less support over time']
      },
      {
        id: 'air-squats',
        name: 'Air Squats',
        description: 'Basic bodyweight squats',
        difficulty: 'Beginner',
        tips: ['Keep weight in heels', 'Knees track over toes']
      },
      {
        id: 'split-squats',
        name: 'Split Squats',
        description: 'One foot forward, one back, lower into lunge position',
        difficulty: 'Intermediate',
        tips: ['Keep front knee over ankle', 'Lower back knee toward ground']
      },
      {
        id: 'bulgarian-split-squats',
        name: 'Bulgarian Split Squats',
        description: 'Split squats with rear foot elevated',
        difficulty: 'Intermediate',
        tips: ['Find stable platform for rear foot', 'Keep torso upright']
      },
      {
        id: 'shrimp-squats',
        name: 'Shrimp Squats',
        description: 'Single-leg squat with rear leg bent and held',
        difficulty: 'Advanced',
        tips: ['Hold non-working leg', 'Progress to not holding leg']
      },
      {
        id: 'pistol-squats',
        name: 'Pistol Squats',
        description: 'Single-leg squat with other leg extended',
        difficulty: 'Elite',
        tips: ['Start with support', 'Keep extended leg straight']
      }
    ]
  },
  {
    id: 'handstand',
    name: 'Handstand Progression',
    category: 'Balance/Push',
    description: 'Work toward a freestanding handstand',
    steps: [
      {
        id: 'wall-plank',
        name: 'Wall Plank',
        description: 'Face-down incline plank with feet on wall',
        difficulty: 'Beginner',
        tips: ['Build up to 60-second hold', 'Keep shoulders active']
      },
      {
        id: 'pike-push-ups',
        name: 'Pike Push-ups',
        description: 'Push-ups with hips raised and head pointing toward ground',
        difficulty: 'Beginner',
        tips: ['Higher pike is harder', 'Focus on shoulder strength']
      },
      {
        id: 'wall-walks',
        name: 'Wall Walks',
        description: 'Walk feet up wall from push-up position',
        difficulty: 'Intermediate',
        tips: ['Walk hands closer to wall', 'Build shoulder endurance']
      },
      {
        id: 'wall-handstand',
        name: 'Wall Handstand',
        description: 'Handstand with feet resting on wall',
        difficulty: 'Intermediate',
        tips: ['Aim for straight line', 'Gentle heel contact with wall']
      },
      {
        id: 'handstand-holds',
        name: 'Freestanding Handstand',
        description: 'Handstand without wall support',
        difficulty: 'Advanced',
        tips: ['Start with back to wall', 'Practice kick-ups separately']
      },
      {
        id: 'handstand-push-ups',
        name: 'Handstand Push-ups',
        description: 'Push-ups while in handstand position',
        difficulty: 'Elite',
        tips: ['Start with head-supported push-ups', 'Build with negatives']
      }
    ]
  },
  {
    id: 'front-lever',
    name: 'Front Lever Progression',
    category: 'Pull',
    description: 'Develop the strength for a full front lever',
    steps: [
      {
        id: 'hanging-knee-raises',
        name: 'Hanging Knee Raises',
        description: 'Hang from bar and raise knees to chest',
        difficulty: 'Beginner',
        tips: ['Avoid swinging', 'Control the movement']
      },
      {
        id: 'tuck-front-lever',
        name: 'Tuck Front Lever',
        description: 'Front lever position with knees tucked to chest',
        difficulty: 'Intermediate',
        tips: ['Keep body horizontal', 'Squeeze shoulder blades']
      },
      {
        id: 'advanced-tuck-front-lever',
        name: 'Advanced Tuck Front Lever',
        description: 'Tuck front lever with hips extended',
        difficulty: 'Intermediate',
        tips: ['Keep hips level with shoulders', 'Open hip angle']
      },
      {
        id: 'one-leg-front-lever',
        name: 'One-Leg Front Lever',
        description: 'Front lever with one leg extended, one tucked',
        difficulty: 'Advanced',
        tips: ['Alternate legs', 'Maintain body position']
      },
      {
        id: 'straddle-front-lever',
        name: 'Straddle Front Lever',
        description: 'Front lever with legs in straddle position',
        difficulty: 'Advanced',
        tips: ['Wide straddle is easier', 'Keep legs straight']
      },
      {
        id: 'full-front-lever',
        name: 'Full Front Lever',
        description: 'Full front lever with body and legs extended',
        difficulty: 'Elite',
        tips: ['Build with holds and negatives', 'Squeeze everything']
      }
    ]
  },
  {
    id: 'planche',
    name: 'Planche Progression',
    category: 'Push',
    description: 'Work toward the full planche',
    steps: [
      {
        id: 'plank',
        name: 'Plank',
        description: 'Body straight, supported by forearms and toes',
        difficulty: 'Beginner',
        tips: ['Keep body straight', 'Engage core']
      },
      {
        id: 'pseudo-planche-pushups',
        name: 'Pseudo Planche Push-ups',
        description: 'Push-ups with hands positioned near hips',
        difficulty: 'Intermediate',
        tips: ['Lean forward', 'Fingers point to feet']
      },
      {
        id: 'frog-stand',
        name: 'Frog Stand',
        description: 'Balance on hands with knees resting on elbows',
        difficulty: 'Intermediate',
        tips: ['Look slightly forward', 'Keep arms straight']
      },
      {
        id: 'tuck-planche',
        name: 'Tuck Planche',
        description: 'Planche position with knees tucked toward chest',
        difficulty: 'Advanced',
        tips: ['Lean forward', 'Protract shoulders']
      },
      {
        id: 'advanced-tuck-planche',
        name: 'Advanced Tuck Planche',
        description: 'Tuck planche with more open hip angle',
        difficulty: 'Advanced',
        tips: ['Maintain shoulder position', 'Gradually open hips']
      },
      {
        id: 'straddle-planche',
        name: 'Straddle Planche',
        description: 'Planche with legs in straddle position',
        difficulty: 'Elite',
        tips: ['Wide straddle is easier', 'Keep legs straight']
      },
      {
        id: 'full-planche',
        name: 'Full Planche',
        description: 'Full planche with body and legs extended',
        difficulty: 'Elite',
        tips: ['Build with holds and negatives', 'Every muscle tight']
      }
    ]
  }
];

export const workoutTemplates = [
  {
    id: 'push-day',
    name: 'Push Day',
    description: 'Focus on pushing movements like push-ups, dips, and handstands',
    exercises: [
      {
        id: '1',
        exerciseId: 'push-ups',
        name: 'Push-ups',
        progressionId: 'push-ups',
        targetSets: 3,
        targetReps: 10
      },
      {
        id: '2',
        exerciseId: 'dips',
        name: 'Dips',
        progressionId: 'dips',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '3',
        exerciseId: 'pike-push-ups',
        name: 'Pike Push-ups',
        progressionId: 'handstand',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '4',
        exerciseId: 'pseudo-planche-pushups',
        name: 'Pseudo Planche Push-ups',
        progressionId: 'planche',
        targetSets: 3,
        targetReps: 5
      }
    ]
  },
  {
    id: 'pull-day',
    name: 'Pull Day',
    description: 'Focus on pulling movements like pull-ups and front lever work',
    exercises: [
      {
        id: '1',
        exerciseId: 'pull-ups',
        name: 'Pull-ups',
        progressionId: 'pull-ups',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '2',
        exerciseId: 'tuck-front-lever',
        name: 'Tuck Front Lever',
        progressionId: 'front-lever',
        targetSets: 3,
        targetDuration: 10
      },
      {
        id: '3',
        exerciseId: 'hanging-knee-raises',
        name: 'Hanging Knee Raises',
        progressionId: 'front-lever',
        targetSets: 3,
        targetReps: 10
      }
    ]
  },
  {
    id: 'legs-day',
    name: 'Legs Day',
    description: 'Focus on lower body calisthenics',
    exercises: [
      {
        id: '1',
        exerciseId: 'air-squats',
        name: 'Air Squats',
        progressionId: 'squats',
        targetSets: 3,
        targetReps: 15
      },
      {
        id: '2',
        exerciseId: 'bulgarian-split-squats',
        name: 'Bulgarian Split Squats',
        progressionId: 'squats',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '3',
        exerciseId: 'shrimp-squats',
        name: 'Shrimp Squats',
        progressionId: 'squats',
        targetSets: 3,
        targetReps: 5
      }
    ]
  },
  {
    id: 'full-body',
    name: 'Full Body Workout',
    description: 'Complete full body calisthenics routine',
    exercises: [
      {
        id: '1',
        exerciseId: 'pull-ups',
        name: 'Pull-ups',
        progressionId: 'pull-ups',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '2',
        exerciseId: 'push-ups',
        name: 'Push-ups',
        progressionId: 'push-ups',
        targetSets: 3,
        targetReps: 10
      },
      {
        id: '3',
        exerciseId: 'dips',
        name: 'Dips',
        progressionId: 'dips',
        targetSets: 3,
        targetReps: 8
      },
      {
        id: '4',
        exerciseId: 'air-squats',
        name: 'Air Squats',
        progressionId: 'squats',
        targetSets: 3,
        targetReps: 15
      },
      {
        id: '5',
        exerciseId: 'tuck-front-lever',
        name: 'Tuck Front Lever',
        progressionId: 'front-lever',
        targetSets: 3,
        targetDuration: 10
      }
    ]
  }
];

export function getExerciseById(exerciseId: string): ProgressionStep | undefined {
  for (const progression of progressions) {
    const exercise = progression.steps.find(step => step.id === exerciseId);
    if (exercise) {
      return exercise;
    }
  }
  return undefined;
}

export function getProgressionById(progressionId: string): ProgressionPath | undefined {
  return progressions.find(progression => progression.id === progressionId);
}

export function getProgressionForExercise(exerciseId: string): ProgressionPath | undefined {
  for (const progression of progressions) {
    if (progression.steps.some(step => step.id === exerciseId)) {
      return progression;
    }
  }
  return undefined;
}

export function getWorkoutTemplate(templateId: string) {
  return workoutTemplates.find(template => template.id === templateId);
}

export function getAllExercises(): ProgressionStep[] {
  const allExercises: ProgressionStep[] = [];
  progressions.forEach(progression => {
    progression.steps.forEach(step => {
      allExercises.push(step);
    });
  });
  return allExercises;
}
