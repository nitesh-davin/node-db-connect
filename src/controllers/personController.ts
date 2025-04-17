import { Request, Response } from 'express';
import { getPersonDetailsService } from '../services/personService';

export const getPersonDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const persons = await getPersonDetailsService();
    res.status(200).json(persons);
  } catch (error) {
    console.error('Error fetching person details:', error);
    res.status(500).json({ 
      error: 'Failed to fetch person details',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
