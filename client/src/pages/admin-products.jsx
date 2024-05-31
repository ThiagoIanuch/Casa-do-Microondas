import DataTable from "../components/data-table";
import React, { useEffect, useState } from 'react';
import axios from 'axios';  

function AdminProducts() {
    // Dados da tabela
    const columns = [
        { 
            field: 'id', headerName: 'ID', flex: 0.5
        },
        { 
            field: 'type', headerName: 'Tipo', flex: 2 
        },
        { 
            field: 'description', headerName: 'Descrição', flex: 2
        },
        {
            field: 'image',
            headerName: 'Imagem',
            flex: 2,
            renderCell: (params) => (
                <div className="data-img-container">
                    <img src={params.value} alt="Brand" className="data-img"/>
                </div>
            ),
        },
        { 
            field: 'price', headerName: 'Preço', flex: 1,
        },
        {
            field: 'action',
            headerName: 'Ações',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <div className="data-action">
                    <input type="button" value="Editar" className="action-btn edit"></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];
      
    // Obter os dados do produto
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/product/getProducts'); 
            setProducts(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Deletar o produto
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/product/deleteProduct/${id}`);
            fetchProducts();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className="admin-products">
            <div className="info">
                <h1>Produtos</h1>
                <button className="action-btn btn-add">Adicionar</button>
            </div>
            <DataTable columns={columns} rows={products}></DataTable>
        </div>
    )
}

export default AdminProducts;
