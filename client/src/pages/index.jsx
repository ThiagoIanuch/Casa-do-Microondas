import React from 'react';
import Menu from '../components/menu.jsx';
import Hero from '../components/hero.jsx';
import Announcements from '../components/announcements.jsx';
import Brands from '../components/brands.jsx';
import Services from '../components/services.jsx';
import Footer from '../components/footer.jsx';
import ProductsOutlet from '../components/products-outlet.jsx';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Index() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Início - Casa do Microondas";
    }, []);

    // Realizar o scroll automaticamente para serviços, caso o usuário clique em serviços
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#services-section') {
            const element = document.getElementById('services-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <Menu />
            <Hero />
            <Announcements />
            <Brands /> {/* Renderiza o Slider */}
            <div id="services-section">
                <Services />
            </div>
            <ProductsOutlet/>
            <Footer />
        </>
    );
}

export default Index;