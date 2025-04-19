import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { studioSchema } from '../schemas/studioSchema';
import { z } from 'zod';

type StudioFormData = z.infer<typeof studioSchema>;

interface StudioFormProps {
  onSubmit: (data: StudioFormData) => void;
}

const StudioForm: React.FC<StudioFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<StudioFormData>({
    resolver: zodResolver(studioSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Studio Name</label>
        <input
          {...register('name')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message?.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Continent</label>
        <input
          {...register('continent')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.continent && <p className="mt-1 text-sm text-red-600">{errors.continent.message?.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Capacity</label>
        <input
          type="number"
          {...register('capacity', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.capacity && <p className="mt-1 text-sm text-red-600">{errors.capacity.message?.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          {...register('address')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message?.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Timezone</label>
        <input
          {...register('timezone')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.timezone && <p className="mt-1 text-sm text-red-600">{errors.timezone.message?.toString()}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Equipment</label>
        <input
          {...register('equipment')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-studio-primary focus:ring-studio-primary"
        />
        {errors.equipment && <p className="mt-1 text-sm text-red-600">{errors.equipment.message?.toString()}</p>}
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-studio-primary hover:bg-studio-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-studio-primary"
      >
        Add Studio
      </button>
    </form>
  );
};

export default StudioForm; 