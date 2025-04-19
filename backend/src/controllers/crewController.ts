import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCrews = async (req: Request, res: Response) => {
  try {
    const crews = await prisma.crew.findMany();
    res.json(crews);
  } catch (error) {
    console.error('Error fetching crews:', error);
    res.status(500).json({ error: 'Failed to fetch crews' });
  }
};

export const createCrew = async (req: Request, res: Response) => {
  try {
    const { name, specialization, members, leadName, leadEmail } = req.body;
    const crew = await prisma.crew.create({
      data: {
        name,
        specialization,
        members,
        leadName,
        leadEmail,
      },
    });
    res.status(201).json(crew);
  } catch (error) {
    console.error('Error creating crew:', error);
    res.status(500).json({ error: 'Failed to create crew' });
  }
}; 