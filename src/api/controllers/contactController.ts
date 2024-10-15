import { Request, Response } from 'express';
import { getContacts } from 'src/api/services/blipService';

export const fetchContacts = async (req: Request, res: Response) => {
  // Extrai a chave de API do cabeçalho de autorização
  const apiKey = req.headers.authorization?.split(' ')[1];

  // Verifica se a chave de API foi fornecida
  if (!apiKey) {
    return res.status(401).json({ error: 'Autorização necessária' });
  }

  // Define a página, convertendo para número
  const page = Number(req.query.page) || 1;

  try {
    // Busca os contatos usando o serviço do Blip
    const contacts = await getContacts(apiKey, page);

    // Responde com os contatos encontrados
    res.json({ contacts });
  } catch (error) {
    console.error(`Erro ao buscar contatos: ${(error as Error).message}`);

    // Responde com erro genérico
    res.status(500).json({ error: 'Erro ao buscar contatos', details: (error as Error).message });
  }
};

