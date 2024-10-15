    import React, { useState } from 'react';
    import Button from '../../components/common/Button';

    const Login = () => {
    const [apiKey, setApiKey] = useState('');

    const handleLogin = () => {
        // Lógica de autenticação
    };

    return (
        <div className="login-container">
        <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Insira sua chave de API"
        />
        <Button text="Login" onClick={handleLogin} />
        </div>
    );
    };

    export default Login;
