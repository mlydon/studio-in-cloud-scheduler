import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createStudio = async (req: Request, res: Response) => {
  try {
    const { name, continent, capacity, equipment, address, timezone } = req.body;
    
    const studio = await prisma.studio.create({
      data: {
        name,
        continent,
        capacity,
        equipment,
        address,
        timezone
      }
    });
    
    res.status(201).json(studio);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create studio' });
  }
};

export const getStudios = async (req: Request, res: Response) => {
  try {
    const studios = await prisma.studio.findMany();
    res.json(studios);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch studios' });
  }
};

export const getStudio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const studio = await prisma.studio.findUnique({
      where: { id: parseInt(id) }
    });
    
    if (!studio) {
      return res.status(404).json({ error: 'Studio not found' });
    }
    
    res.json(studio);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch studio' });
  }
};

export const updateStudio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, continent, capacity, equipment, address, timezone } = req.body;
    
    const studio = await prisma.studio.update({
      where: { id: parseInt(id) },
      data: {
        name,
        continent,
        capacity,
        equipment,
        address,
        timezone
      }
    });
    
    res.json(studio);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update studio' });
  }
};

export const deleteStudio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    await prisma.studio.delete({
      where: { id: parseInt(id) }
    });
    
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete studio' });
  }
}; 