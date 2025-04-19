import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const studios = [
  {
    name: "Dublin Studio",
    continent: "Europe",
    capacity: 5,
    equipment: ["4K Cameras", "Lighting Kit", "Green Screen", "Sound Booth"],
    address: "Dublin, Ireland",
    timezone: "Europe/Dublin"
  },
  {
    name: "London Studio",
    continent: "Europe",
    capacity: 6,
    equipment: ["Cinema Cameras", "Professional Lighting", "Sound Booth", "Teleprompter"],
    address: "London, England",
    timezone: "Europe/London"
  },
  {
    name: "Mountain View Studio",
    continent: "North America",
    capacity: 5,
    equipment: ["4K Cameras", "Virtual Set", "LED Walls", "Audio Mixing"],
    address: "Mountain View, CA",
    timezone: "America/Los_Angeles"
  },
  {
    name: "New York Studio",
    continent: "North America",
    capacity: 6,
    equipment: ["4K Cameras", "Lighting Kit", "Green Screen", "Sound Booth"],
    address: "New York, NY",
    timezone: "America/New_York"
  },
  {
    name: "Sao Paulo Studio",
    continent: "South America",
    capacity: 5,
    equipment: ["4K Cameras", "Professional Lighting", "Sound Stage", "Audio Recording"],
    address: "Sao Paulo, Brazil",
    timezone: "America/Sao_Paulo"
  },
  {
    name: "Graz Studio",
    continent: "Europe",
    capacity: 4,
    equipment: ["4K Cameras", "Natural Lighting", "Sound Booth", "Virtual Set"],
    address: "Graz, Austria",
    timezone: "Europe/Vienna"
  },
  {
    name: "Dubai Studio",
    continent: "Asia",
    capacity: 5,
    equipment: ["4K Cameras", "LED Walls", "Virtual Production", "Sound Stage"],
    address: "Dubai, UAE",
    timezone: "Asia/Dubai"
  },
  {
    name: "Bangalore Studio",
    continent: "Asia",
    capacity: 5,
    equipment: ["4K Cameras", "Professional Lighting", "Sound Booth", "Virtual Set"],
    address: "Bangalore, India",
    timezone: "Asia/Kolkata"
  },
  {
    name: "Tokyo Studio",
    continent: "Asia",
    capacity: 6,
    equipment: ["8K Cameras", "Advanced Lighting", "Virtual Set", "Audio Mixing"],
    address: "Tokyo, Japan",
    timezone: "Asia/Tokyo"
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