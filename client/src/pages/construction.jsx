import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import { useEffect } from 'react';

function Construction() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Em construção - Casa do Microondas";
    }, []);

    return (
        <>
            <Menu></Menu>

                <div className="error-container">
                    <h1>Em construção!</h1>
                    <a href="/"><img src="construction.png" className='error'></img></a>
                </div>

            <Footer></Footer>
        </>
    )
}

export default Construction;