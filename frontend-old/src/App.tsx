import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { 
  Calendar, 
  Users,
  Home
} from 'lucide-react';

// Import the new page components
import StudioDashboard from './pages/StudioDashboard';
import BookingPage from './pages/BookingPage';
import CrewPage from './pages/CrewPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold text-studio-primary">Studio Scheduler</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                    >
                      <Home className="mr-2" size={16} />
                      Studios
                    </Link>
                    <Link
                      to="/bookings"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Calendar className="mr-2" size={16} />
                      Bookings
                    </Link>
                    <Link
                      to="/crews"
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                      <Users className="mr-2" size={16} />
                      Crews
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<StudioDashboard />} />
              <Route path="/bookings" element={<BookingPage />} />
              <Route path="/crews" element={<CrewPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
