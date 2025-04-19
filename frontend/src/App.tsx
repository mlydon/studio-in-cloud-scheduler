import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { 
  Building2, 
  Calendar, 
  Users 
} from 'lucide-react';

// Import the new page components
import StudioDashboard from './pages/StudioDashboard';
import BookingPage from './pages/BookingPage';
import CrewPage from './pages/CrewPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex min-h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="w-64 bg-studio-primary text-white p-6">
            <h1 className="text-2xl font-bold mb-8">Studio Scheduler</h1>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="flex items-center hover:bg-blue-700 p-2 rounded transition"
                  >
                    <Building2 className="mr-3" />
                    Studios
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/bookings" 
                    className="flex items-center hover:bg-blue-700 p-2 rounded transition"
                  >
                    <Calendar className="mr-3" />
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/crews" 
                    className="flex items-center hover:bg-blue-700 p-2 rounded transition"
                  >
                    <Users className="mr-3" />
                    Crews
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-10">
            <Routes>
              <Route path="/" element={<StudioDashboard />} />
              <Route path="/bookings" element={<BookingPage />} />
              <Route path="/crews" element={<CrewPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
