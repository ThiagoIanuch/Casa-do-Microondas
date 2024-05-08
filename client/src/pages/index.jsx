import React from 'react';
import Menu from '../components/menu.jsx';
import Hero from '../components/hero.jsx';
import Announcements from '../components/announcements.jsx';
import Brands from '../components/brands.jsx';
import Services from '../components/services.jsx';
import Footer from '../components/footer.jsx';

function Index() {
    return (
        <>
            <Menu />
            <Hero />
            <Announcements />
            <Brands /> {/* Renderiza o Slider */}
            <Services />
            <Footer />
        </>
    );
}

export default Index;