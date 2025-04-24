import React, { useState, useEffect } from 'react';
import { Building2, Globe, Camera, Plus } from 'lucide-react';
import StudioForm from '../components/StudioForm';
import WorldMapBackground from '../components/WorldMapBackground';

interface Studio {
  id: number;
  name: string;
  continent: string;
  capacity: number;
  equipment: string[];
  address: string;
  timezone: string;
}

const StudioDashboard: React.FC = () => {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchStudios();
  }, []);

  const fetchStudios = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/studios');
      const data = await response.json();
      setStudios(data);
    } catch (error) {
      console.error('Failed to fetch studios:', error);
    }
  };

  const handleAddStudio = async (studioData: Omit<Studio, 'id'>) => {
    try {
      const response = await fetch('http://localhost:4000/api/studios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studioData),
      });

      if (response.ok) {
        const newStudio = await response.json();
        setStudios(prev => [...prev, newStudio]);
        setShowForm(false);
      } else {
        console.error('Failed to add studio');
      }
    } catch (error) {
      console.error('Error adding studio:', error);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      <WorldMapBackground />
      <div className="container mx-auto px-4 py-6 relative">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Studio Dashboard</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center px-3 py-1.5 bg-studio-primary text-white rounded-md hover:bg-studio-primary/90 text-sm shadow-sm"
          >
            <Plus className="mr-1" size={16} />
            {showForm ? 'Cancel' : 'Add Studio'}
          </button>
        </div>

        {showForm && (
          <div className="mb-6">
            <StudioForm onSubmit={handleAddStudio} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studios.map(studio => (
            <div 
              key={studio.id} 
              className="bg-white/90 backdrop-blur-sm shadow-sm rounded-lg p-4 hover:shadow-md transition text-sm border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <Building2 className="text-studio-primary" size={24} />
                <div className="flex items-center text-gray-500 text-xs">
                  <Globe className="mr-1" size={14} />
                  {studio.continent}
                </div>
              </div>
              <h2 className="text-lg font-semibold mb-1 text-gray-800">{studio.name}</h2>
              <div className="flex items-center mb-1 text-xs text-gray-600">
                <Camera className="mr-1" size={14} />
                <span>Capacity: {studio.capacity}</span>
              </div>
              <div className="mb-2 text-xs text-gray-500">
                <p>{studio.address}</p>
                <p>{studio.timezone}</p>
              </div>
              <div>
                <h3 className="font-medium text-xs mb-1 text-gray-700">Equipment:</h3>
                <ul className="text-xs text-gray-500">
                  {studio.equipment.map((item, index) => (
                    <li key={index} className="truncate">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioDashboard;
