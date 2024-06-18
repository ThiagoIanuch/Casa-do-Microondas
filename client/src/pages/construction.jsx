import Footer from '../components/footer.jsx';
import { useEffect } from 'react';

function Construction() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Em construção - Casa do Microondas";
    }, []);

    return (
        <div className="error-container">
            <h1>Em construção!</h1>
            <a href="/"><img src="construction.png" className='error'></img></a>
        </div>
    )
}

export default Construction;