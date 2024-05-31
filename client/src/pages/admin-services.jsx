import DataTable from "../components/data-table";

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
      
    const rows = [
        { id: 1, name: 'Reparo de Microondas', description: 'Substituição de componentes internos danificados.', status: true },
        { id: 2, name: 'Manutenção Preventiva', description: 'Limpeza e verificação de todas as funções do microondas.', status: true },
        { id: 3, name: 'Troca de Magnetron', description: 'Substituição do magnetron para restauração do aquecimento.', status: false },
        { id: 4, name: 'Reparação do Painel', description: 'Conserto ou substituição do painel de controle.', status: true },
        { id: 5, name: 'Substituição de Porta', description: 'Troca da porta do microondas por danos ou falhas no fecho.', status: true },
        { id: 6, name: 'Troca de Luz Interna', description: 'Substituição da lâmpada interna queimada.', status: false },
        { id: 7, name: 'Reparo de Fiação', description: 'Correção de problemas na fiação elétrica interna.', status: true },
        { id: 8, name: 'Ajuste de Timer', description: 'Correção de falhas no temporizador digital.', status: true },
        { id: 9, name: 'Reparo de Motor do Prato', description: 'Substituição ou reparo do motor que gira o prato.', status: false },
        { id: 10, name: 'Reparo de Ventilação', description: 'Correção de problemas no sistema de ventilação.', status: true },
        { id: 11, name: 'Substituição de Porta', description: 'Troca da porta do microondas por danos ou falhas no fecho.', status: true },
        { id: 12, name: 'Troca de Luz Interna', description: 'Substituição da lâmpada interna queimada.', status: false },
        { id: 13, name: 'Reparo de Fiação', description: 'Correção de problemas na fiação elétrica interna.', status: true },
        { id: 14, name: 'Ajuste de Timer', description: 'Correção de falhas no temporizador digital.', status: true },
        { id: 15, name: 'Reparo de Motor do Prato', description: 'Substituição ou reparo do motor que gira o prato.', status: false }
    ];
    
    return (
        <div className="admin-services">
            <div className="info">
                <h1>Serviços</h1>
                <button className="action-btn btn-add">Adicionar</button>
            </div>
            <DataTable columns={columns} rows={rows}></DataTable>
        </div>
    )
}

export default AdminServices;