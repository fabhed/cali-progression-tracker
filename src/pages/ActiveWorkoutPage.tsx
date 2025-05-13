
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useWorkout } from '../context/WorkoutContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { getAllExercises } from '../data/progressions';
import { Plus, X, ArrowDown, ArrowUp, Check, Clock } from 'lucide-react';

const ActiveWorkoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    currentWorkout, 
    addExercise, 
    removeExercise, 
    addSet, 
    updateSet, 
    removeSet, 
    completeWorkout, 
    cancelWorkout, 
    updateWorkoutName 
  } = useWorkout();
  
  const [workoutNotes, setWorkoutNotes] = useState<string>('');
  const [showExerciseSelector, setShowExerciseSelector] = useState<boolean>(false);
  const [exerciseSearch, setExerciseSearch] = useState<string>('');
  
  const allExercises = getAllExercises();
  const filteredExercises = allExercises.filter(exercise => 
    exercise.name.toLowerCase().includes(exerciseSearch.toLowerCase())
  );
  
  // Redirect if no active workout
  React.useEffect(() => {
    if (!currentWorkout) {
      navigate('/');
    }
  }, [currentWorkout, navigate]);
  
  if (!currentWorkout) {
    return null;
  }

  const handleExerciseAdd = (exerciseId: string, exerciseName: string) => {
    addExercise(exerciseId, exerciseName);
    setShowExerciseSelector(false);
    setExerciseSearch('');
  };
  
  const handleAddSet = (exerciseLogId: string) => {
    addSet(exerciseLogId, { reps: 0 });
  };
  
  const handleUpdateReps = (exerciseLogId: string, setId: string, reps: number) => {
    updateSet(exerciseLogId, setId, { reps });
  };
  
  const handleUpdateDuration = (exerciseLogId: string, setId: string, duration: number) => {
    updateSet(exerciseLogId, setId, { duration });
  };
  
  const handleUpdateWeight = (exerciseLogId: string, setId: string, weight: number) => {
    updateSet(exerciseLogId, setId, { weight });
  };
  
  const handleFinishWorkout = () => {
    completeWorkout(workoutNotes);
    toast({
      title: "Workout Completed!",
      description: "Your workout has been saved.",
    });
    navigate('/');
  };
  
  const handleCancelWorkout = () => {
    if (window.confirm("Are you sure you want to cancel this workout? All progress will be lost.")) {
      cancelWorkout();
      navigate('/');
    }
  };
  
  // Format duration to mm:ss
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Calculate workout duration
  const workoutDuration = Math.floor((new Date().getTime() - currentWorkout.date.getTime()) / 60000);
  
  return (
    <Layout title={currentWorkout.name} showNavbar={false} showBackButton>
      <div className="p-4 max-w-lg mx-auto">
        {/* Workout Timer */}
        <div className="bg-primary/10 p-3 rounded-lg mb-4 flex justify-between items-center">
          <div className="flex items-center">
            <Clock className="mr-2 text-primary" size={20} />
            <span className="font-medium">{workoutDuration} min</span>
          </div>
          <Input 
            value={currentWorkout.name} 
            onChange={(e) => updateWorkoutName(e.target.value)}
            className="max-w-[200px] font-medium text-center"
            aria-label="Workout name"
          />
        </div>
        
        {/* Exercises */}
        {currentWorkout.exercises.length > 0 ? (
          <div className="space-y-6 mb-6">
            {currentWorkout.exercises.map((exercise, exerciseIndex) => (
              <Card key={exercise.id} className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-bold text-lg">{exercise.exerciseName}</h3>
                  <button 
                    onClick={() => removeExercise(exercise.id)} 
                    className="text-gray-500 hover:text-red-500 p-1"
                    aria-label="Remove exercise"
                  >
                    <X size={18} />
                  </button>
                </div>
                
                {/* Sets */}
                {exercise.sets.length > 0 ? (
                  <div className="space-y-3 mb-3">
                    <div className="grid grid-cols-12 gap-2 text-sm font-medium text-gray-500 px-1">
                      <div className="col-span-1">#</div>
                      <div className="col-span-3">Reps</div>
                      <div className="col-span-3">Weight</div>
                      <div className="col-span-3">Time</div>
                      <div className="col-span-2"></div>
                    </div>
                    
                    {exercise.sets.map((set, setIndex) => (
                      <div key={set.id} className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-1 text-gray-500 font-medium">
                          {setIndex + 1}
                        </div>
                        <div className="col-span-3">
                          <Input 
                            type="number" 
                            value={set.reps || 0} 
                            onChange={(e) => handleUpdateReps(exercise.id, set.id, parseInt(e.target.value) || 0)}
                            min={0}
                            className="w-full"
                          />
                        </div>
                        <div className="col-span-3">
                          <Input 
                            type="number" 
                            value={set.weight || 0} 
                            onChange={(e) => handleUpdateWeight(exercise.id, set.id, parseInt(e.target.value) || 0)}
                            min={0}
                            step={1}
                            className="w-full"
                            placeholder="kg"
                          />
                        </div>
                        <div className="col-span-3">
                          <Input 
                            type="number" 
                            value={set.duration || 0} 
                            onChange={(e) => handleUpdateDuration(exercise.id, set.id, parseInt(e.target.value) || 0)}
                            min={0}
                            className="w-full"
                            placeholder="sec"
                          />
                        </div>
                        <div className="col-span-2 flex">
                          <button 
                            onClick={() => removeSet(exercise.id, set.id)} 
                            className="text-gray-400 hover:text-red-500 p-1"
                            aria-label="Remove set"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm mb-3">No sets added yet</p>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleAddSet(exercise.id)}
                  className="w-full mt-2"
                >
                  <Plus size={16} className="mr-1" />
                  Add Set
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center mb-6">
            <p className="text-gray-500 mb-4">No exercises added yet</p>
            <Button 
              onClick={() => setShowExerciseSelector(true)}
              variant="outline"
            >
              <Plus size={16} className="mr-1" />
              Add Exercise
            </Button>
          </Card>
        )}
        
        {/* Add Exercise Button */}
        {currentWorkout.exercises.length > 0 && (
          <Button 
            variant="outline" 
            onClick={() => setShowExerciseSelector(true)}
            className="w-full mb-6"
          >
            <Plus size={16} className="mr-2" />
            Add Exercise
          </Button>
        )}
        
        {/* Notes */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Workout Notes</h3>
          <Textarea 
            value={workoutNotes}
            onChange={(e) => setWorkoutNotes(e.target.value)}
            placeholder="How did this workout feel? Any personal records?"
            className="w-full h-20"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Button 
            variant="default" 
            className="flex-1"
            onClick={handleFinishWorkout}
          >
            <Check size={16} className="mr-2" />
            Complete Workout
          </Button>
          <Button 
            variant="destructive" 
            className="flex-shrink-0"
            onClick={handleCancelWorkout}
          >
            <X size={16} />
          </Button>
        </div>
      </div>
      
      {/* Exercise Selector Dialog */}
      <Dialog open={showExerciseSelector} onOpenChange={setShowExerciseSelector}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Exercise</DialogTitle>
          </DialogHeader>
          
          <div className="mb-4">
            <Input 
              placeholder="Search exercises..."
              value={exerciseSearch}
              onChange={(e) => setExerciseSearch(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div className="max-h-[400px] overflow-y-auto">
            {filteredExercises.map(exercise => (
              <div 
                key={exercise.id}
                className="p-3 border-b hover:bg-gray-50 cursor-pointer"
                onClick={() => handleExerciseAdd(exercise.id, exercise.name)}
              >
                <h3 className="font-medium">{exercise.name}</h3>
                <p className="text-sm text-gray-500">{exercise.difficulty}</p>
              </div>
            ))}
            
            {filteredExercises.length === 0 && (
              <p className="text-center py-4 text-gray-500">No exercises found</p>
            )}
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExerciseSelector(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ActiveWorkoutPage;
