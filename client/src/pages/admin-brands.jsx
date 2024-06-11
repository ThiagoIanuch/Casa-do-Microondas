import DataTable from "../components/data-table";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Modal } from '@mui/material';

function AdminBrands() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Marcas - Área administrador";
    }, []);

    // Obter os dados das marcas
    const [brands, setBrands] = useState([]);

    const columns = [
        { 
            field: 'id', headerName: 'ID', flex: 0.5
        },
        { 
            field: 'name', headerName: 'Marca', flex: 2 
        },
        {
            field: 'url', headerName: 'URL', flex: 2
        },
        {
            field: 'image',
            headerName: 'Imagem',
            flex: 3,
            renderCell: (params) => (
                <div className="data-img-container">
                    <img src={`http://localhost:8080/brands-img/${params.value}`} alt="Imagem marca" className="data-img"/>
                </div>
            ),
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
                    <input type="button" value="Editar" className="action-btn edit" onClick={() => editBrand(params.row.id, params.row.name, params.row.url, params.row.image, params.row.status)}></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];
      
    // Adicionar as marcas que já existem
    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/brand/get'); 
            setBrands(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Deletar marcas
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/brand/delete/${id}`);
            fetchBrands();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Editar ou adicionar marca
       const [brandData, setBrandData] = useState({
        id: '',
        name: '',
        url: '',
        image: '',
        status: false
    });
    
    const handleChange = (event) => {
        const { name, type, value, checked, files } = event.target;
        setBrandData({ 
            ...brandData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    // Abrir o painel modal
    const [openModal, setOpenModal] = useState(false);

    // Enviar novos dados
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', brandData.id);
        formData.append('name', brandData.name);
        formData.append('url', brandData.url);
        formData.append('image', brandData.image);
        formData.append('status', brandData.status ? 'true' : 'false');

        try {
            if (brandData.id) {
                await axios.put(`http://localhost:8080/api/brand/update/${brandData.id}`, formData)
            } else {
                await axios.post('http://localhost:8080/api/brand/add', formData)
            }
            fetchBrands();
            setOpenModal(false);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Gerenciar modal para editar ou para adicionar
    const editBrand = (id, name, url, image, status) => {
        setBrandData({id, name, url, image, status });
        setOpenModal(true);
    };

    const addBrand = () => {
        setBrandData({
            id: '',
            name: '',
            url: '',
            image: '',
            status: false
        });
        setOpenModal(true);
    };

    return (
        <div className="admin-brands">
            <div className="info">
                <h1>Marcas</h1>
                <button className="action-btn btn-add" onClick={addBrand}>Adicionar</button>
            </div>
            <DataTable columns={columns} rows={brands}></DataTable>

            {/* Form para editar/adicionar */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-box">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="modal-label">Marca</label>
                    <input type="text" placeholder="Nome da marca" name="name" value={brandData.name} onChange={handleChange} className="modal-btn"></input>

                    <label htmlFor="url" className="modal-label">URL</label>
                    <input type="text" placeholder="URL da marca" name="url" value={brandData.url} onChange={handleChange} className="modal-btn"></input>

                    <label htmlFor="image" className="modal-label">Imagem</label>
                    <div className="img-container">
                        <div className="file-container">
                            <input type="file" name="image" onChange={handleChange} className="input-file"></input>
                            <p>Arraste ou clique aqui para enviar sua imagem</p>
                        </div>
                        <div className="file-container-preview">
                            <img src={`http://localhost:8080/brands-img/${brandData.image}`} alt="Imagem marca" className="modal-img brand-img"/>
                        </div>
                    </div>
                    
                    <div className="status-modal">
                        <label htmlFor="status" className="modal-label label-checkbox">Adicionar ao carrosel:  </label>
                        <input type="checkbox" name="status" checked={brandData.status} onChange={handleChange} className="modal-checkbox"></input>
                    </div>

                    <input type="submit" value="Confirmar" className="modal-btn-submit"></input>
                </form>
            </Modal>
        </div>
    )
}

export default AdminBrands;