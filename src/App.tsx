    import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Login from './pages/Login';
    import Home from './pages/Home';
    import Contact from './pages/Contact';

    const App = () => (
    <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/contato/:id" element={<Contact />} />
        </Routes>
    </Router>
    );

    export default App;
