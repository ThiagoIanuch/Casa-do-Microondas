import DataTable from "../components/data-table";
import { Modal } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminServices() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Serviços - Área administrador";
    }, []);

    // Obter os serviços
    const [services, setServices] = useState([]);

    const columns = [
        { 
            field: 'id', headerName: 'ID', flex: 0.5
        },
        {
            field: 'icon',
            headerName: 'Icone',
            flex: 0.5,
            renderCell: (params) => (
                <div className="data-img-container">
                    <img src={`http://localhost:8080/services-img/${params.value}`} alt="Icone serviço" className="data-img"/>
                </div>
            ),
        },
        { 
            field: 'title', headerName: 'Serviço', flex: 2 
        },
        { 
            field: 'description', headerName: 'Descrição', flex: 4 
        },
        { 
            field: 'status', headerName: 'Status', flex: 1, type: "boolean" 
        },
        {
            field: 'action',
            headerName: 'Ações',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => (
                <div className="data-action">
                    <input type="button" value="Editar" className="action-btn edit" onClick={() => editService(params.row.id, params.row.icon, params.row.title, params.row.description, params.row.status)}></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];
      
    // Adicionar os Serviços existentes
    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/service/get'); 
            setServices(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Deletar o Serviço
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/service/delete/${id}`);
            fetchServices();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Editar ou adicionar Serviço
    const [serviceData, setServiceData] = useState({
        id: '',
        icon: '',
        title: '',
        description: '',
        status: false
    });

    const handleChange = (event) => {
        const { name, type, value, checked, files } = event.target;
        setServiceData({ 
            ...serviceData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    // Abrir o painel modal
    const [openModal, setOpenModal] = useState(false);

    // Enviar novos dados
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', serviceData.id);
        formData.append('icon', serviceData.icon);
        formData.append('title', serviceData.title);
        formData.append('description', serviceData.description);
        formData.append('status', serviceData.status ? 'true' : 'false');

        try {
            if (serviceData.id) {
                await axios.put(`http://localhost:8080/api/service/update/${serviceData.id}`, formData)
            } else {
                await axios.post('http://localhost:8080/api/service/add', formData)
            }
            fetchServices();
            setOpenModal(false);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Gerenciar modal para editar ou para adicionar
    const editService = (id, icon, title, description, status) => {
        setServiceData({id, icon, title, description, status });
        setOpenModal(true);
    };

    const addService = () => {
        setServiceData({
            id: '',
            icon: '',
            title: '',
            description: '',
            status: false
        });
        setOpenModal(true);
    };

    return (
        <div className="admin-services">
            <div className="info">
                <h1>Serviços</h1>
                <button className="action-btn btn-add" onClick={addService}>Adicionar</button>
            </div>
            <DataTable columns={columns} rows={services}></DataTable>
            
            {/* Form para editar/adicionar */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-box">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="icon" className="modal-label">Icone</label>
                    <div className="img-container">
                        <div className="file-container">
                            <input type="file" name="icon" onChange={handleChange} className="input-file"></input>
                            <p>Arraste ou clique aqui para enviar seu icone</p>
                        </div>
                        <div className="file-container-preview">
                            <img src={`http://localhost:8080/services-img/${serviceData.icon}`} alt="Imagem produto" className="modal-img"/>
                        </div>
                    </div>

                    <label htmlFor="type" className="modal-label">Serviço</label>
                    <input type="text" placeholder="Serviço" name="title" value={serviceData.title} onChange={handleChange} className="modal-btn"></input>
                    
                    <label htmlFor="description" className="modal-label">Descrição</label>
                    <textarea placeholder="Descrição" name="description" value={serviceData.description} onChange={handleChange} className="modal-btn"></textarea>
                    
                    <div className="status-modal">
                        <label htmlFor="status" className="modal-label label-checkbox">Adicionar ao carrosel:  </label>
                        <input type="checkbox" name="status" checked={serviceData.status} onChange={handleChange} className="modal-checkbox"></input>
                    </div>

                    <input type="submit" value="Confirmar" className="modal-btn-submit"></input>
                </form>
            </Modal>
        </div>
    )
 }

export default AdminServices;