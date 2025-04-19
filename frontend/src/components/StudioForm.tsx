import React, { useState } from 'react';
import { Building2, Globe, Camera, MapPin, Clock } from 'lucide-react';

interface StudioFormProps {
  onSubmit: (studio: {
    name: string;
    continent: string;
    capacity: number;
    equipment: string[];
    address: string;
    timezone: string;
  }) => void;
}

const StudioForm: React.FC<StudioFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    continent: '',
    capacity: 1,
    equipment: [''],
    address: '',
    timezone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEquipmentChange = (index: number, value: string) => {
    const newEquipment = [...formData.equipment];
    newEquipment[index] = value;
    setFormData(prev => ({ ...prev, equipment: newEquipment }));
  };

  const addEquipmentField = () => {
    setFormData(prev => ({ ...prev, equipment: [...prev.equipment, ''] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Studio</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Studio Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Continent</label>
          <select
            name="continent"
            value={formData.continent}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a continent</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Europe">Europe</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Capacity</label>
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            min="1"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Timezone</label>
          <input
            type="text"
            name="timezone"
            value={formData.timezone}
            onChange={handleChange}
            placeholder="e.g., America/New_York"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Equipment</label>
          {formData.equipment.map((item, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleEquipmentChange(index, e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Enter equipment item"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addEquipmentField}
            className="mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded"
          >
            Add Equipment
          </button>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Studio
        </button>
      </div>
    </form>
  );
};

export default StudioForm; 