import DataTable from "../components/data-table";
import { useState, useEffect } from "react";
import axios from 'axios';
import { Modal } from '@mui/material';

function AdminBanners() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Anúncios - Área administrador";
    }, []);

    // Obter os dados dos banners
    const [banners, setBanners] = useState([]);
    
    const columns = [
        { 
            field: 'id', headerName: 'ID', flex: 0.5
        },
        {
            field: 'image',
            headerName: 'Imagem',
            flex: 2,
            renderCell: (params) => (
                <div className="data-img-container">
                    <img src={`http://localhost:8080/announcements-img/${params.value}`} alt="Banner" className="data-img"/>
                </div>
            ),
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
                    <input type="button" value="Editar" className="action-btn edit" onClick={() => editBanner(params.row.id, params.row.image, params.row.description, params.row.status)}></input>
                    <input type="button" value="Excluir" className="action-btn delete" onClick={() => handleDelete(params.row.id)}></input>
                </div>
            )
        }
    ];

   // Adicionar os banners que já existem
    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/announcement/get'); 
            setBanners(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Deletar banners
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/announcement/delete/${id}`);
            fetchBanners();   
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Editar ou adicionar marca
       const [bannerData, setBannerData] = useState({
        id: '',
        image: '',
        description: '',
        status: false
    });
    
    const handleChange = (event) => {
        const { name, type, value, checked, files } = event.target;
        setBannerData({ 
            ...bannerData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
        });
    };

    // Abrir o painel modal
    const [openModal, setOpenModal] = useState(false);

    // Enviar novos dados
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', bannerData.id);
        formData.append('image', bannerData.image);
        formData.append('description', bannerData.description);
        formData.append('status', bannerData.status ? 'true' : 'false');

        try {
            if (bannerData.id) {
                await axios.put(`http://localhost:8080/api/announcement/update/${bannerData.id}`, formData)
            } else {
                await axios.post('http://localhost:8080/api/announcement/add', formData)
            }
            fetchBanners();
            setOpenModal(false);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Gerenciar modal para editar ou para adicionar
    const editBanner = (id, image, description, status) => {
        setBannerData({id, image, description, status });
        setOpenModal(true);
    };

    const addBanner = () => {
        setBannerData({
            id: '',
            image: '',
            description: '',
            status: false
        });
        setOpenModal(true);
    };
      
    return (
        <div className="admin-announcements">
            <div className="info">
                <h1>Anúncios</h1>
                <button className="action-btn btn-add" onClick={addBanner}>Adicionar</button>
            </div>
            <DataTable columns={columns} rows={banners}></DataTable>

            {/* Form para editar/adicionar */}
            <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-box">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <label htmlFor="image" className="modal-label">Imagem</label>
                    <div className="img-container">
                        <div className="file-container">
                            <input type="file" name="image" onChange={handleChange} className="input-file"></input>
                            <p>Arraste ou clique aqui para enviar sua imagem</p>
                        </div>
                        <div className="file-container-preview">
                            <img src={`http://localhost:8080/announcements-img/${bannerData.image}`} alt="Imagem banner" className="modal-img brand-img"/>
                        </div>
                    </div>

                    <label htmlFor="description" className="modal-label">Descrição</label>
                    <input type="text" placeholder="Descrição do banner" name="description" value={bannerData.description} onChange={handleChange} className="modal-btn"></input>
                    
                    <div className="status-modal">
                        <label htmlFor="status" className="modal-label label-checkbox">Adicionar ao carrosel:  </label>
                        <input type="checkbox" name="status" checked={bannerData.status} onChange={handleChange} className="modal-checkbox"></input>
                    </div>

                    <input type="submit" value="Confirmar" className="modal-btn-submit"></input>
                </form>
            </Modal>
        </div>
    )
}

export default AdminBanners;