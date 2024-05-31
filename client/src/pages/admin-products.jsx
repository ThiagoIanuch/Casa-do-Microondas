import DataTable from "../components/data-table";
import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';  

function AdminProducts() {
    // Obter os dados do produto
    const [products, setProducts] = useState([]);

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
                    <input type="button" value="Editar" className="action-btn edit" onClick={() => editProduct(params.row.id, params.row.type, params.row.description, params.row.price)}></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];

    // Adicionar os produtos existentes
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/product/get'); 
            setProducts(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Deletar o produto
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/product/delete/${id}`);
            fetchProducts();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Editar ou adicionar produto
    const [productData, setProductData] = useState({
        id: '',
        type: '',
        description: '',
        price: ''
    });

    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]: event.target.value});
    };

    // Abrir o painel modal
    const [openModal, setOpenModal] = useState(false);

    // Enviar novos dados
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if(productData.id) {
                await axios.put(`http://localhost:8080/api/product/update/${productData.id}`, productData);
            }
            else {
                await axios.post('http://localhost:8080/api/product/add', productData);
            }
            fetchProducts();
            setOpenModal(false);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Gerenciar modal para editar ou para adicionar
    const editProduct = (id, type, description, price) => {
        setProductData({id, type, description, price });
        setOpenModal(true);
    };

    const addProduct = () => {
        setProductData('');
        setOpenModal(true);
    };


    return (
        <div className="admin-products">
            <div className="info">
                <h1>Produtos</h1>
                <button className="action-btn btn-add" onClick={addProduct}>Adicionar</button>
            </div>
            <DataTable columns={columns} rows={products}></DataTable>

            {/* Form para editar/adicionar */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-box">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Tipo" name="type" value={productData.type} onChange={handleChange} className="modal-btn"></input>
                    <input type="text" placeholder="Descrição" name="description" value={productData.description} onChange={handleChange} className="modal-btn"></input>
                    <input type="file" name="file" onChange={handleChange} className="modal-btn"></input>
                    <input type="text" placeholder="Preço" name="price" value={productData.price} onChange={handleChange} className="modal-btn"></input>
                    <input type="submit" value="Salvar" className="modal-btn"></input>
                </form>
            </Modal>
        </div>
    );
}

export default AdminProducts;