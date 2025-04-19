import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const BookingPage: React.FC = () => {
  // Mock bookings data
  const bookings = [
    {
      id: 1,
      project: 'LinkedIn Leadership Series',
      date: '2024-07-15',
      startTime: '10:00 AM',
      endTime: '2:00 PM',
      studio: 'New York Studio',
      crew: 'Creative Team Alpha'
    },
    {
      id: 2,
      project: 'Tech Innovation Showcase',
      date: '2024-07-22',
      startTime: '1:00 PM',
      endTime: '5:00 PM',
      studio: 'London Studio',
      crew: 'Tech Narrative Squad'
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bookings</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {bookings.map(booking => (
          <div 
            key={booking.id} 
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-4">
              <Calendar className="text-studio-primary" size={32} />
              <span className="text-gray-500">{booking.date}</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">{booking.project}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <Clock className="mr-2" size={16} />
              {booking.startTime} - {booking.endTime}
            </div>
            <div className="flex items-center text-gray-600">
              <Users className="mr-2" size={16} />
              {booking.studio} | {booking.crew}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingPage;
