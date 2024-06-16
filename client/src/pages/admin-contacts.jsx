import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from "../components/data-table";

function AdminContacts() {
    // Dados da tabela
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'name', headerName: 'Nome', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 2 },
        { field: 'subject', headerName: 'Assunto', flex: 2 },
        { field: 'message', headerName: 'Mensagem', flex: 4 }
    ];

    // Adicionar os dados na tabela
    const [contacts, setContacts] = useState([]);

    // Adicionar os contatos existentes
    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/contact/get');
            setContacts(response.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className="admin-contacts">
            <div className="info">
                <h1>Contatos</h1>
            </div>
            <DataTable columns={columns} rows={contacts} />
        </div>
    );
}

export default AdminContacts;