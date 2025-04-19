import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const crews = [
  {
    name: "Learning GCP Team",
    specialization: "Google Cloud Platform Training",
    members: 8,
    leadName: "GCP Lead",
    leadEmail: "gcp.lead@example.com"
  },
  {
    name: "LMP Team",
    specialization: "Learning Management Platform",
    members: 6,
    leadName: "LMP Lead",
    leadEmail: "lmp.lead@example.com"
  },
  {
    name: "Editorial Team",
    specialization: "Content Creation and Editing",
    members: 5,
    leadName: "Editorial Lead",
    leadEmail: "editorial.lead@example.com"
  }
];

async function main() {
  console.log('Starting crew population...');
  try {
    // Test database connection
    await prisma.$connect();
    console.log('Successfully connected to database');

    // Clear existing crews
    console.log('Clearing existing crews...');
    await prisma.crew.deleteMany({});
    console.log('Successfully cleared existing crews');

    // Add new crews
    console.log('Adding new crews...');
    for (const crew of crews) {
      const created = await prisma.crew.create({
        data: crew
      });
      console.log(`Added crew: ${created.name}`);
    }

    console.log('Successfully populated all crews');
  } catch (error) {
    console.error('Error details:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 