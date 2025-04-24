import { z } from 'zod';

export const studioSchema = z.object({
  name: z.string().min(1, 'Studio name is required'),
  continent: z.string().min(1, 'Continent is required'),
  capacity: z.number().min(1, 'Capacity must be at least 1'),
  address: z.string().min(1, 'Address is required'),
  timezone: z.string().min(1, 'Timezone is required'),
  equipment: z.string().min(1, 'Equipment is required')
}); 