    import express from 'express';
    import path from 'path';

    // Cria a aplicação Express
    const app = express();

    // Define a porta
    const PORT = process.env.PORT || 3000;

    // Serve os arquivos estáticos da pasta "public" (ou "build", dependendo da sua estrutura)
    app.use(express.static(path.join(__dirname, 'public')));

    // Defina uma rota para servir o arquivo index.html ou outro ponto de entrada do React
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Inicia o servidor
    app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    });
