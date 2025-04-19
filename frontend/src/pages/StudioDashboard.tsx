import React, { useState, useEffect } from 'react';
import { Building2, Globe, Camera, Plus } from 'lucide-react';
import StudioForm from '../components/StudioForm';

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
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Studio Dashboard</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center px-4 py-2 bg-studio-primary text-white rounded-md hover:bg-studio-primary/90"
        >
          <Plus className="mr-2" size={20} />
          {showForm ? 'Cancel' : 'Add Studio'}
        </button>
      </div>

      {showForm && (
        <div className="mb-8">
          <StudioForm onSubmit={handleAddStudio} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {studios.map(studio => (
          <div 
            key={studio.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <Building2 className="text-studio-primary" size={32} />
              <div className="flex items-center text-gray-500">
                <Globe className="mr-2" size={16} />
                {studio.continent}
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">{studio.name}</h2>
            <div className="flex items-center mb-2">
              <Camera className="mr-2 text-gray-600" size={16} />
              <span>Capacity: {studio.capacity}</span>
            </div>
            <div className="mb-2">
              <p className="text-sm text-gray-500">Address: {studio.address}</p>
              <p className="text-sm text-gray-500">Timezone: {studio.timezone}</p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Equipment:</h3>
              <ul className="text-sm text-gray-500">
                {studio.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudioDashboard;
