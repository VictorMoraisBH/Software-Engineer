    export const getContacts = async (apiKey: string, page: number) => {
        try {
        const response = await fetch('https://http.msging.net/commands', {
            method: 'POST',
            headers: {
            Authorization: `Key ${apiKey}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            id: '1',
            to: 'postmaster@msging.net',
            method: 'get',
            uri: `/contacts?page=${page}`,
            }),
        });
    
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro ao obter contatos: ${errorData.reason || 'Erro desconhecido'}`);
        }
    
        const data = await response.json();
    
        // Verifica se a estrutura dos dados está correta
        if (!data.resource || !data.resource.items) {
            throw new Error('A resposta não contém o campo "items" esperado');
        }
    
        // Retorna os itens de contatos
        return data.resource.items;
    
        } catch (error) {
        console.error(`Erro na requisição: ${(error as Error).message}`);
        throw new Error(`Falha ao obter contatos: ${(error as Error).message}`);
        }
    };
    