
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, PlusCircle, History, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/') ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <Dumbbell size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/start-workout" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/start-workout') ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <PlusCircle size={24} />
          <span className="text-xs mt-1">Workout</span>
        </Link>
        
        <Link 
          to="/history" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/history') ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <History size={24} />
          <span className="text-xs mt-1">History</span>
        </Link>
        
        <Link 
          to="/progressions" 
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive('/progressions') ? 'text-primary' : 'text-gray-500'
          }`}
        >
          <Calendar size={24} />
          <span className="text-xs mt-1">Progress</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
