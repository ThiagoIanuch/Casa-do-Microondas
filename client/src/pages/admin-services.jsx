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
                    <input type="button" value="Editar" className="action-btn edit"></input>
                    <input type="button" value="Excluir" className="action-btn delete"></input>
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

    useEffect(() =>
        {

        getServices()

        },[])
    
    return (
        <div className="admin-services">
            <div className="info">
                <h1>Serviços</h1>
                <button className="action-btn btn-add">Adicionar</button>
            </div>
            <DataTable columns={columns} rows={service}></DataTable>
        </div>
    )
    }

export default AdminServices;