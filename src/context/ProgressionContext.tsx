
import React, { createContext, useContext, useState, useEffect } from 'react';
import { progressions } from '../data/progressions';

interface ProgressionContextType {
  activeProgressions: string[];
  addProgression: (progressionId: string) => void;
  removeProgression: (progressionId: string) => void;
  isActive: (progressionId: string) => boolean;
  getCurrentLevel: (progressionId: string) => number;
  updateProgressionLevel: (progressionId: string, level: number) => void;
}

interface ProgressionLevel {
  progressionId: string;
  currentLevel: number; // Index of current step in the progression
}

const ProgressionContext = createContext<ProgressionContextType | undefined>(undefined);

export const ProgressionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProgressions, setActiveProgressions] = useState<string[]>([]);
  const [progressionLevels, setProgressionLevels] = useState<ProgressionLevel[]>([]);

  // Load active progressions from localStorage on mount
  useEffect(() => {
    const savedActiveProgressions = localStorage.getItem('activeProgressions');
    if (savedActiveProgressions) {
      try {
        setActiveProgressions(JSON.parse(savedActiveProgressions));
      } catch (error) {
        console.error('Error loading active progressions:', error);
      }
    } else {
      // Default active progressions if none found
      const defaultProgressions = ['pull-ups', 'push-ups', 'dips'];
      setActiveProgressions(defaultProgressions);
      localStorage.setItem('activeProgressions', JSON.stringify(defaultProgressions));
    }

    const savedProgressionLevels = localStorage.getItem('progressionLevels');
    if (savedProgressionLevels) {
      try {
        setProgressionLevels(JSON.parse(savedProgressionLevels));
      } catch (error) {
        console.error('Error loading progression levels:', error);
      }
    }
  }, []);

  // Save active progressions to localStorage when they change
  useEffect(() => {
    localStorage.setItem('activeProgressions', JSON.stringify(activeProgressions));
  }, [activeProgressions]);

  // Save progression levels to localStorage when they change
  useEffect(() => {
    localStorage.setItem('progressionLevels', JSON.stringify(progressionLevels));
  }, [progressionLevels]);

  const addProgression = (progressionId: string) => {
    if (!activeProgressions.includes(progressionId)) {
      setActiveProgressions(prev => [...prev, progressionId]);
      
      // Initialize level if not already set
      if (!progressionLevels.some(p => p.progressionId === progressionId)) {
        setProgressionLevels(prev => [...prev, { progressionId, currentLevel: 0 }]);
      }
    }
  };

  const removeProgression = (progressionId: string) => {
    setActiveProgressions(prev => prev.filter(id => id !== progressionId));
  };

  const isActive = (progressionId: string) => {
    return activeProgressions.includes(progressionId);
  };

  const getCurrentLevel = (progressionId: string) => {
    const progression = progressionLevels.find(p => p.progressionId === progressionId);
    return progression ? progression.currentLevel : 0;
  };

  const updateProgressionLevel = (progressionId: string, level: number) => {
    setProgressionLevels(prev => {
      const progression = prev.find(p => p.progressionId === progressionId);
      
      if (progression) {
        return prev.map(p => 
          p.progressionId === progressionId 
            ? { ...p, currentLevel: level } 
            : p
        );
      } else {
        return [...prev, { progressionId, currentLevel: level }];
      }
    });
  };

  return (
    <ProgressionContext.Provider
      value={{
        activeProgressions,
        addProgression,
        removeProgression,
        isActive,
        getCurrentLevel,
        updateProgressionLevel
      }}
    >
      {children}
    </ProgressionContext.Provider>
  );
};

export const useProgression = () => {
  const context = useContext(ProgressionContext);
  if (context === undefined) {
    throw new Error('useProgression must be used within a ProgressionProvider');
  }
  return context;
};
