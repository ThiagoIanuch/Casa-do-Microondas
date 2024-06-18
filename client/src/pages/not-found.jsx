import Footer from '../components/footer.jsx';
import { useEffect } from 'react';
import NotFoundImg from '../../public/not-found.png';

function NotFound() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Erro 404 - Casa do Microondas";
    }, []);
    return (
        <div className="error-container">
            <h1>Página não encontrada!</h1>
            <a href="/"><img src={NotFoundImg} className='error'></img></a>
        </div>
    )
}

export default NotFound;