    export const getContacts = async (apiKey: string, page: number) => {
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
    
        if (!response.ok) {
        throw new Error('Erro ao obter contatos');
        }
    
        const data = await response.json();
        return data.resource.items;
    };
    