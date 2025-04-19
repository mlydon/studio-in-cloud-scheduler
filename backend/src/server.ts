import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import studioRoutes from './routes/studioRoutes';
import crewRoutes from './routes/crewRoutes';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'Healthy', 
    message: 'Studio in the Cloud Backend is running' 
  });
});

// Studio routes
app.use('/api/studios', studioRoutes);
app.use('/api/crews', crewRoutes);

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
