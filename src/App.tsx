
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WorkoutProvider } from "./context/WorkoutContext";
import { ProgressionProvider } from "./context/ProgressionContext";

// Pages
import HomePage from "./pages/HomePage";
import StartWorkoutPage from "./pages/StartWorkoutPage";
import ActiveWorkoutPage from "./pages/ActiveWorkoutPage";
import HistoryPage from "./pages/HistoryPage";
import ProgressionsPage from "./pages/ProgressionsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <WorkoutProvider>
        <ProgressionProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/start-workout" element={<StartWorkoutPage />} />
              <Route path="/active-workout" element={<ActiveWorkoutPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/progressions" element={<ProgressionsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ProgressionProvider>
      </WorkoutProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
