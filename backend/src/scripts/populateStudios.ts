import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const studios = [
  {
    name: "New York Studio",
    continent: "North America",
    capacity: 5,
    equipment: ["4K Cameras", "Lighting Kit", "Green Screen", "Sound Booth"],
    address: "123 Broadway, New York, NY 10001",
    timezone: "America/New_York"
  },
  {
    name: "London Studio",
    continent: "Europe",
    capacity: 4,
    equipment: ["Cinema Cameras", "Professional Lighting", "Sound Booth", "Teleprompter"],
    address: "45 Oxford Street, London W1D 2DZ",
    timezone: "Europe/London"
  },
  {
    name: "Tokyo Studio",
    continent: "Asia",
    capacity: 6,
    equipment: ["8K Cameras", "Advanced Lighting", "Virtual Set", "Audio Mixing"],
    address: "1-1-1 Marunouchi, Chiyoda-ku, Tokyo 100-0005",
    timezone: "Asia/Tokyo"
  },
  {
    name: "Sydney Studio",
    continent: "Australia",
    capacity: 4,
    equipment: ["4K Cameras", "Natural Lighting", "Outdoor Set", "Audio Recording"],
    address: "1 Darling Island Road, Pyrmont NSW 2009",
    timezone: "Australia/Sydney"
  },
  {
    name: "Dubai Studio",
    continent: "Asia",
    capacity: 5,
    equipment: ["4K Cameras", "LED Walls", "Virtual Production", "Sound Stage"],
    address: "Dubai Studio City, Dubai, UAE",
    timezone: "Asia/Dubai"
  }
];

async function main() {
  console.log('Starting database population...');
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Successfully connected to database');

    // Clear existing studios
    console.log('Clearing existing studios...');
    await prisma.studio.deleteMany({});
    console.log('Successfully cleared existing studios');

    // Add new studios
    console.log('Adding new studios...');
    for (const studio of studios) {
      const created = await prisma.studio.create({
        data: studio
      });
      console.log(`Added studio: ${created.name}`);
    }

    console.log('Successfully populated all studios');
  } catch (error) {
    console.error('Error details:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 