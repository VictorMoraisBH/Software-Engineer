import { Request, Response } from 'express';
import { getContacts } from '../services/blipService';

export const fetchContacts = async (req: Request, res: Response) => {
  const apiKey = req.headers.authorization?.split(' ')[1];
  const page = req.query.page || 1;

  try {
    const contacts = await getContacts(apiKey, page);
    res.json({ contacts });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar contatos' });
  }
};
