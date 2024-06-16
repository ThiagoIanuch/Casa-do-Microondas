import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from "../components/data-table";

function AdminOrders() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "O.S - Área administrador";
    }, []);

    // Dados da tabela
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'first_name', headerName: 'Primeiro nome', flex: 1.5 },
        { field: 'last_name', headerName: 'Sobrenome', flex: 1.5 },
        { field: 'phone', headerName: 'Telefone', flex: 1 },
        { field: 'type', headerName: 'Tipo produto', flex: 1.5 },
        { field: 'name', headerName: 'Marca', flex: 1.5 },
        { field: 'model', headerName: 'Modelo produto', flex: 1.5 },
        { field: 'description', headerName: 'Descrição defeito', flex: 4 }
    ];

    // Adicionar os dados na tabela
    const [orders, setOrders] = useState([]);

    // Adicionar os contatos existentes
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/service-order/get');
            setOrders(response.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className="admin-contacts">
            <div className="info">
                <h1>Ordens de serviço</h1>
            </div>
            <DataTable columns={columns} rows={orders} />
        </div>
    );
}

export default AdminOrders;