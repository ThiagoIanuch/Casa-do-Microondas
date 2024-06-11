import { useEffect } from "react";

function AdminHome() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Início - Área administrador";
    }, []);

    return (
        <div className="admin-home">
            <div className="info info-home">
                <h1>Home</h1>
                <p>- Selecione uma das opções no menu a esquerda</p>
            </div>
        </div>
    )
}

export default AdminHome;