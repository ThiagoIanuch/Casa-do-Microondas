import DataTable from "../components/data-table";

function AdminBanners() {
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
                    <img src={params.value} alt="Banner" className="data-img"/>
                </div>
            ),
        },
        { 
            field: 'Description', headerName: 'Descrição', flex: 4
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
      
    const rows = [
        { id: 1, name: 'Brastemp', image: '/s1.png', status: true },
        { id: 2, name: 'Electrolux', image: '/s4.png', status: false },
        { id: 3, name: 'Brastemp', image: '/s1.png', status: true },
        { id: 4, name: 'Brastemp', image: '/s1.png', status: true },
        { id: 5, name: 'Consul', image: '/s2.png', status: true },
        { id: 6, name: 'Electrolux', image: '/s4.png', status: false },
        { id: 7, name: 'Philco', image: '/s6.png', status: true },
        { id: 8, name: 'Britânia', image: '/s3.png', status: true },
        { id: 9, name: 'Philco', image: '/s6.png', status: true },
        { id: 10, name: 'Britânia', image: '/s3.png', status: true }
    ];
    
    return (
        <div className="admin-brands">
            <div className="info">
                <h1>Anúncios</h1>
                <button className="action-btn btn-add">Adicionar</button>
            </div>
            <DataTable columns={columns} rows={rows}></DataTable>
        </div>
    )
}

export default AdminBanners;