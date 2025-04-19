import React from 'react';
import { Users, UserCircle } from 'lucide-react';

const CrewPage: React.FC = () => {
  // Mock crews data
  const crews = [
    {
      id: 1,
      name: 'Creative Team Alpha',
      specialization: 'Corporate Content',
      members: 5,
      leadName: 'Emma Rodriguez'
    },
    {
      id: 2,
      name: 'Tech Narrative Squad',
      specialization: 'Tech & Innovation',
      members: 4,
      leadName: 'Alex Chen'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Production Crews</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {crews.map(crew => (
          <div 
            key={crew.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <Users className="text-studio-primary" size={32} />
              <span className="text-gray-500 text-sm">{crew.specialization}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{crew.name}</h2>
            <div className="flex items-center mb-2">
              <UserCircle className="mr-2 text-gray-600" size={16} />
              <span className="text-gray-600">Lead: {crew.leadName}</span>
            </div>
            <div className="text-gray-500">
              Team Size: {crew.members} members
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrewPage;
