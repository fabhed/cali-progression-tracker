import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Card } from '@/components/ui/card';
import { useWorkout } from '../context/WorkoutContext';
import { useProgression } from '../context/ProgressionContext';
import { getProgressionById, convertToProgressionPaths } from '../data/progressions';
import { Button } from '@/components/ui/button';
import { Dumbbell, Clock, Plus, Calendar } from 'lucide-react';

const HomePage: React.FC = () => {
  const { workoutHistory, startWorkout } = useWorkout();
  const { activeProgressions, getCurrentLevel } = useProgression();
  
  // Get last workout date
  const lastWorkoutDate = workoutHistory.length > 0 
    ? new Date(workoutHistory[0].date)
    : null;
  
  // Format the date nicely
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Get active progression data
  const activeProgressionData = activeProgressions
    .map(id => getProgressionById(id))
    .filter(progression => progression !== undefined);
  
  return (
    <Layout title="Calisthenics Tracker">
      <div className="p-4 max-w-lg mx-auto">
        {/* Welcome Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">
            {lastWorkoutDate 
              ? `Last workout: ${formatDate(lastWorkoutDate)}` 
              : "Let's get your first workout started!"}
          </p>
        </section>
        
        {/* Quick Start */}
        <section className="mb-8">
          <Card className="bg-primary text-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Ready to Train?</h2>
              <Dumbbell size={24} />
            </div>
            <p className="mb-4">Start a new workout session now.</p>
            <Link to="/start-workout">
              <Button className="w-full bg-white text-primary hover:bg-gray-100" size="lg">
                <Plus size={20} className="mr-2" />
                Start Workout
              </Button>
            </Link>
          </Card>
        </section>
        
        {/* Your Progress */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Your Progress</h2>
            <Link to="/progressions" className="text-primary text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-3">
            {activeProgressionData.slice(0, 3).map(progression => {
              if (!progression) return null;
              
              const currentLevel = getCurrentLevel(progression.id);
              const currentExercise = progression.steps[currentLevel];
              const nextExercise = progression.steps[currentLevel + 1];
              
              return (
                <Card key={progression.id} className="p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">{progression.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Current: <span className="font-medium">{currentExercise?.name}</span>
                  </p>
                  {nextExercise && (
                    <p className="text-xs text-gray-500 mt-1">
                      Next: {nextExercise.name}
                    </p>
                  )}
                </Card>
              );
            })}
            
            {activeProgressionData.length === 0 && (
              <Card className="p-4 text-center">
                <p className="text-gray-600">No active progressions yet.</p>
                <Link to="/progressions">
                  <Button variant="link" className="mt-2">
                    Add Progressions
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </section>
        
        {/* Recent Workouts */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recent Workouts</h2>
            <Link to="/history" className="text-primary text-sm font-medium">
              View All
            </Link>
          </div>
          
          <div className="space-y-3">
            {workoutHistory.slice(0, 3).map(workout => (
              <Card key={workout.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">{workout.name}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(workout.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <Dumbbell size={16} className="mr-1" />
                  <span>{workout.exercises.length} exercises</span>
                  {workout.duration && (
                    <>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-1" />
                      <span>{workout.duration} min</span>
                    </>
                  )}
                </div>
              </Card>
            ))}
            
            {workoutHistory.length === 0 && (
              <Card className="p-4 text-center">
                <p className="text-gray-600">No workout history yet.</p>
                <Link to="/start-workout">
                  <Button variant="link" className="mt-2">
                    Start Your First Workout
                  </Button>
                </Link>
              </Card>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
