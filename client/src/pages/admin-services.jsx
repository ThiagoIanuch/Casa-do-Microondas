import DataTable from "../components/data-table";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminServices() {
    const columns = [
        { 
            field: 'id', headerName: 'ID', flex: 0.5
        },
        { 
            field: 'name', headerName: 'Serviço', flex: 2 
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
                    <input type="button" value="Editar" className="action-btn edit" onClick={() => editservice(params.row.id, params.row.type, params.row.description, params.row.price)}></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];
      
    const [service, setservice] = useState([]);

    const getServices = async() => {
        try {
            const resp = await axios.get ("http://localhost:8080/api/service/get")
            setservice(resp.data)
        }
        catch(error) {
            console.log(error.response.data.msg);
        }
    }

    useEffect(() => {
        getServices()
        },[])
    
    


    // Adicionar os Serviços existentes
    useEffect(() => {
        fetchservice();
    }, []);

    const fetchservice = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/service/get'); 
            setservice(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };
product
    // Deletar o Serviço
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/service/delete/${id}`);
            fetchservice();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Editar ou adicionar Serviço
    const [serviceData, setserviceData] = useState({
        id: '',
        name: '',
        description: '',
        status: ''
    });

    const handleChange = (event) => {
        setserviceData({...serviceData, [event.target.name]: event.target.value});
    };

    // Abrir o painel modal
    const [openModal, setOpenModal] = useState(false);

    // Enviar novos dados
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if(serviceData.id) {
                await axios.put(`http://localhost:8080/api/service/update/${serviceData.id}`, serviceData);
            }
            else {
                await axios.post('http://localhost:8080/api/service/add', serviceData);
            }
            fetchservice();
            setOpenModal(false);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Gerenciar modal para editar ou para adicionar
    const editservice = (id, name, description, status) => {
        setserviceData({id, name, description, status });
        setOpenModal(true);
    };

    const addservice = () => {
        setserviceData('');
        setOpenModal(true);
    };

    return (
        <div className="admin-services">
            <div className="info">
                <h1>Serviços</h1>
                <button className="action-btn btn-add" onClick={addservice}>Adicionar</button>
            </div>
            <DataTable columns={columns} rows={service}></DataTable>
            
            {/* Form para editar/adicionar */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-box">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Tipo" name="type" value={serviceData.type} onChange={handleChange} className="modal-btn"></input>
                    <input type="file" name="file" onChange={handleChange} className="modal-btn"></input>
                    <input type="submit" value="Salvar" className="modal-btn"></input>
                </form>
            </Modal>
        </div>
    )
 }

export default AdminServices;