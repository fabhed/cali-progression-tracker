
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useWorkout } from '../context/WorkoutContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { workoutTemplates } from '../data/progressions';
import { Dumbbell, Plus } from 'lucide-react';

const StartWorkoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { startWorkout } = useWorkout();
  
  const handleStartCustomWorkout = () => {
    startWorkout();
    navigate('/active-workout');
  };
  
  const handleStartTemplateWorkout = (templateId: string) => {
    const template = workoutTemplates.find(t => t.id === templateId);
    if (template) {
      startWorkout(template);
      navigate('/active-workout');
    }
  };
  
  return (
    <Layout title="Start Workout" showBackButton onBack={() => navigate('/')}>
      <div className="p-4 max-w-lg mx-auto">
        {/* Custom Workout */}
        <section className="mb-6">
          <Card className="p-5 bg-primary text-white rounded-xl hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold">Custom Workout</h2>
              <Plus size={24} />
            </div>
            <p className="text-white/90 mb-4">Build your own workout from scratch.</p>
            <Button 
              className="w-full bg-white text-primary hover:bg-gray-100" 
              size="lg"
              onClick={handleStartCustomWorkout}
            >
              Start Custom Workout
            </Button>
          </Card>
        </section>
        
        {/* Workout Templates */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Workout Templates</h2>
          
          <div className="space-y-4">
            {workoutTemplates.map(template => (
              <Card 
                key={template.id} 
                className="p-4 hover:shadow-md transition-shadow"
                onClick={() => handleStartTemplateWorkout(template.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                  <Dumbbell size={20} className="text-primary" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                <div className="text-sm text-gray-500">
                  {template.exercises.length} exercises
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StartWorkoutPage;
