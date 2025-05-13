
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useWorkout } from '../context/WorkoutContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { WorkoutLog } from '../types';
import { Dumbbell, Clock, Calendar, ChevronRight } from 'lucide-react';

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { workoutHistory } = useWorkout();
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutLog | null>(null);
  
  // Group workouts by month
  const groupedByMonth: Record<string, WorkoutLog[]> = {};
  
  workoutHistory.forEach(workout => {
    const date = new Date(workout.date);
    const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    if (!groupedByMonth[monthYear]) {
      groupedByMonth[monthYear] = [];
    }
    
    groupedByMonth[monthYear].push(workout);
  });
  
  const months = Object.keys(groupedByMonth).sort((a, b) => {
    // Sort in reverse chronological order
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  });
  
  const handleWorkoutSelect = (workout: WorkoutLog) => {
    setSelectedWorkout(workout);
  };
  
  // Format date to readable form
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };
  
  return (
    <Layout title="Workout History" showBackButton onBack={() => navigate('/')}>
      <div className="p-4 max-w-lg mx-auto">
        {workoutHistory.length > 0 ? (
          <>
            {/* Tabs for months */}
            <Tabs defaultValue={months[0]} className="w-full">
              <TabsList className="grid grid-cols-2 mb-4 w-full md:flex md:flex-wrap">
                {months.map(month => (
                  <TabsTrigger key={month} value={month}>
                    {month}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {months.map(month => (
                <TabsContent key={month} value={month} className="space-y-4">
                  {groupedByMonth[month].map(workout => (
                    <Card
                      key={workout.id}
                      className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => handleWorkoutSelect(workout)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                        <div className="flex items-center text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          <span className="text-sm">
                            {new Date(workout.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-2 text-sm text-gray-600">
                        <Dumbbell size={14} className="mr-1" />
                        <span>{workout.exercises.length} exercises</span>
                        {workout.duration && (
                          <>
                            <span className="mx-2">•</span>
                            <Clock size={14} className="mr-1" />
                            <span>{workout.duration} min</span>
                          </>
                        )}
                        <ChevronRight size={16} className="ml-auto" />
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Workout History</h3>
            <p className="text-gray-500 mb-4">You haven't logged any workouts yet.</p>
            <Link to="/start-workout">
              <Button>Start Your First Workout</Button>
            </Link>
          </div>
        )}
      </div>
      
      {/* Workout Detail Dialog */}
      {selectedWorkout && (
        <Dialog open={!!selectedWorkout} onOpenChange={() => setSelectedWorkout(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedWorkout.name}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 my-2">
              <div className="flex justify-between text-sm">
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-1" />
                  <span>{formatDate(selectedWorkout.date)}</span>
                </div>
                {selectedWorkout.duration && (
                  <div className="flex items-center text-gray-600">
                    <Clock size={16} className="mr-1" />
                    <span>{selectedWorkout.duration} min</span>
                  </div>
                )}
              </div>
              
              {/* Exercises */}
              <div className="space-y-4">
                {selectedWorkout.exercises.map(exercise => (
                  <Card key={exercise.id} className="p-3">
                    <h3 className="font-medium text-gray-900">{exercise.exerciseName}</h3>
                    
                    {exercise.sets.length > 0 ? (
                      <div className="mt-2 space-y-1">
                        {exercise.sets.map((set, index) => (
                          <div key={set.id} className="grid grid-cols-12 gap-2 text-sm">
                            <div className="col-span-1 text-gray-500">{index + 1}</div>
                            <div className="col-span-3">
                              {set.reps ? `${set.reps} reps` : '-'}
                            </div>
                            <div className="col-span-4">
                              {set.weight ? `${set.weight} kg` : '-'}
                            </div>
                            <div className="col-span-4">
                              {set.duration ? `${set.duration} sec` : '-'}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-500 mt-1">No sets recorded</p>
                    )}
                  </Card>
                ))}
              </div>
              
              {/* Notes */}
              {selectedWorkout.notes && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Notes</h3>
                  <p className="text-gray-600 text-sm">{selectedWorkout.notes}</p>
                </div>
              )}
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedWorkout(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
};

export default HistoryPage;
