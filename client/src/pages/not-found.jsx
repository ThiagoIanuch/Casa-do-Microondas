import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import { useEffect } from 'react';

function NotFound() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Erro 404 - Casa do Microondas";
    }, []);
    return (
        <>
            <Menu></Menu>

                <div className="error-container">
                    <h1>Página não encontrada!</h1>
                    <a href="/"><img src="not-found.png" className='error'></img></a>
                </div>

            <Footer></Footer>
        </>
    )
}

export default NotFound;