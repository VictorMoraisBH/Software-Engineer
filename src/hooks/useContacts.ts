    import { useState, useEffect } from 'react';

    const useContacts = (page: number) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchContacts = async () => {
        setLoading(true);
        const apiKey = localStorage.getItem('apiKey');
        const response = await fetch(`/api/contacts?page=${page}`, {
            headers: {
            Authorization: `Key ${apiKey}`,
            },
        });
        const data = await response.json();
        setContacts(data.contacts);
        setLoading(false);
        };

        fetchContacts();
    }, [page]);

    return { contacts, loading };
    };

    export default useContacts;
