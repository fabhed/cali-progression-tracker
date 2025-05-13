
import React from 'react';
import Navbar from './Navbar';
import { useWorkout } from '../context/WorkoutContext';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  showNavbar?: boolean;
  showBackButton?: boolean;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  showNavbar = true,
  showBackButton = false,
  onBack
}) => {
  const { currentWorkout } = useWorkout();
  
  // Hide navbar when in active workout
  const shouldShowNavbar = showNavbar && !currentWorkout;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      {(title || showBackButton) && (
        <header className="bg-white border-b border-gray-200 py-4 px-4 flex items-center">
          {showBackButton && (
            <button 
              onClick={onBack} 
              className="mr-2 p-2 -ml-2 rounded-full hover:bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            </button>
          )}
          {title && <h1 className="text-xl font-bold text-gray-900">{title}</h1>}
        </header>
      )}
      
      {/* Main Content */}
      <main className="flex-1 pb-16">
        {children}
      </main>
      
      {/* Navigation */}
      {shouldShowNavbar && <Navbar />}
    </div>
  );
};

export default Layout;
