import React, { useState, useEffect } from 'react';
import { Users, Mail, Briefcase } from 'lucide-react';

interface Crew {
  id: number;
  name: string;
  specialization: string;
  members: number;
  leadName: string;
  leadEmail: string;
}

const CrewPage: React.FC = () => {
  const [crews, setCrews] = useState<Crew[]>([]);

  useEffect(() => {
    fetchCrews();
  }, []);

  const fetchCrews = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/crews');
      const data = await response.json();
      setCrews(data);
    } catch (error) {
      console.error('Failed to fetch crews:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Crews</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {crews.map(crew => (
          <div 
            key={crew.id} 
            className="bg-white/90 backdrop-blur-sm shadow-sm rounded-lg p-4 hover:shadow-md transition text-sm border border-gray-100"
          >
            <div className="flex justify-between items-center mb-2">
              <Users className="text-studio-primary" size={24} />
              <div className="flex items-center text-gray-500 text-xs">
                <Briefcase className="mr-1" size={14} />
                {crew.specialization}
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-1 text-gray-800">{crew.name}</h2>
            <div className="flex items-center mb-1 text-xs text-gray-600">
              <Users className="mr-1" size={14} />
              <span>Members: {crew.members}</span>
            </div>
            <div className="mb-2 text-xs text-gray-500">
              <p>Lead: {crew.leadName}</p>
              <div className="flex items-center">
                <Mail className="mr-1" size={14} />
                <span>{crew.leadEmail}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrewPage;
