
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useProgression } from '../context/ProgressionContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { progressions, getProgressionById } from '../data/progressions';
import { ProgressionPath, ProgressionStep } from '../types';
import { ChevronRight, Star, Info } from 'lucide-react';

const ProgressionsPage: React.FC = () => {
  const navigate = useNavigate();
  const { activeProgressions, addProgression, removeProgression, getCurrentLevel, updateProgressionLevel } = useProgression();
  
  const [selectedProgression, setSelectedProgression] = useState<ProgressionPath | null>(null);
  
  // Group progressions by category
  const progressionsByCategory: Record<string, ProgressionPath[]> = {};
  
  progressions.forEach(progression => {
    if (!progressionsByCategory[progression.category]) {
      progressionsByCategory[progression.category] = [];
    }
    
    progressionsByCategory[progression.category].push(progression);
  });
  
  const categories = Object.keys(progressionsByCategory);
  
  const handleProgressionSelect = (progression: ProgressionPath) => {
    setSelectedProgression(progression);
  };
  
  const handleToggleActive = (progressionId: string, isCurrentlyActive: boolean) => {
    if (isCurrentlyActive) {
      removeProgression(progressionId);
    } else {
      addProgression(progressionId);
    }
  };
  
  const handleSetCurrentLevel = (progressionId: string, levelIndex: number) => {
    updateProgressionLevel(progressionId, levelIndex);
  };
  
  return (
    <Layout title="Skill Progressions" showBackButton onBack={() => navigate('/')}>
      <div className="p-4 max-w-lg mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your Active Progressions</h2>
          
          {activeProgressions.length > 0 ? (
            <div className="space-y-3">
              {activeProgressions.map(progressionId => {
                const progression = getProgressionById(progressionId);
                if (!progression) return null;
                
                const currentLevel = getCurrentLevel(progressionId);
                const currentExercise = progression.steps[currentLevel];
                const nextExercise = progression.steps[currentLevel + 1];
                
                return (
                  <Card 
                    key={progression.id} 
                    className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleProgressionSelect(progression)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">{progression.name}</h3>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
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
            </div>
          ) : (
            <Card className="p-6 text-center">
              <p className="text-gray-500 mb-2">No active progressions yet</p>
              <p className="text-sm text-gray-400 mb-4">Select skills to track from the list below</p>
            </Card>
          )}
        </div>
        
        {/* All Progressions */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">All Progressions</h2>
        
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 w-full md:flex md:flex-wrap">
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="space-y-3">
              {progressionsByCategory[category].map(progression => (
                <Card
                  key={progression.id}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 
                      className="font-semibold text-gray-900 cursor-pointer"
                      onClick={() => handleProgressionSelect(progression)}
                    >
                      {progression.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`active-${progression.id}`}
                        checked={activeProgressions.includes(progression.id)}
                        onCheckedChange={() => handleToggleActive(
                          progression.id, 
                          activeProgressions.includes(progression.id)
                        )}
                      />
                      <Label htmlFor={`active-${progression.id}`} className="sr-only">
                        Track Progression
                      </Label>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{progression.description}</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-primary px-0"
                    onClick={() => handleProgressionSelect(progression)}
                  >
                    View Details <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Progression Detail Dialog */}
      {selectedProgression && (
        <Dialog open={!!selectedProgression} onOpenChange={() => setSelectedProgression(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedProgression.name}</DialogTitle>
            </DialogHeader>
            
            <div className="flex items-center justify-between py-2">
              <div className="text-sm text-gray-600">{selectedProgression.description}</div>
              <div className="flex items-center">
                <Switch
                  id="track-progression"
                  checked={activeProgressions.includes(selectedProgression.id)}
                  onCheckedChange={() => handleToggleActive(
                    selectedProgression.id, 
                    activeProgressions.includes(selectedProgression.id)
                  )}
                />
                <Label htmlFor="track-progression" className="ml-2">
                  Track
                </Label>
              </div>
            </div>
            
            <div className="max-h-[400px] overflow-y-auto my-2">
              <div className="space-y-3">
                {selectedProgression.steps.map((step, index) => {
                  const isCurrentLevel = activeProgressions.includes(selectedProgression.id) && 
                    getCurrentLevel(selectedProgression.id) === index;
                  
                  return (
                    <Card 
                      key={step.id} 
                      className={`p-3 ${isCurrentLevel ? 'border-primary bg-primary/5' : ''}`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">{step.name}</h3>
                          <p className="text-xs text-gray-500">{step.difficulty}</p>
                        </div>
                        
                        {activeProgressions.includes(selectedProgression.id) && (
                          <Button
                            variant={isCurrentLevel ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleSetCurrentLevel(selectedProgression.id, index)}
                          >
                            {isCurrentLevel ? 'Current' : 'Set Current'}
                          </Button>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mt-2">{step.description}</p>
                      
                      {step.tips && step.tips.length > 0 && (
                        <div className="mt-2">
                          <div className="flex items-center text-xs font-medium text-gray-500 mb-1">
                            <Info size={12} className="mr-1" />
                            Tips
                          </div>
                          <ul className="text-xs text-gray-600 list-disc pl-4 space-y-1">
                            {step.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedProgression(null)}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Layout>
  );
};

export default ProgressionsPage;
