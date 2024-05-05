import '../css/menu.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Menu() {
    const [color, setColor] = useState(false);
    const location = useLocation();

    const changeColor = function() {
        if(window.scrollY >= 75) {
            setColor(true);
        }
        else {
            setColor(false);
        }       
    };

    useEffect(() => {
        if(location.pathname == '/') {
            window.addEventListener('scroll', changeColor);
        }
        else {
            setColor(true);
        }

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, [location.pathname]);

    return (
        <header className={color ? "header-container" : "header-container bg-hero"}>
            <div className={color ? "logo" : "logo filter-hero"}>
                <a href="/"><img src="logo.png"></img></a>
            </div>
            <nav className="nav-container">
                <ul className="menu-links">
                    <li className={color ? "menu-link" : "menu-link color-hero"}><a href="/">Home</a></li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <p>Serviços</p>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="#">Conserto de microondas</a></li>
                            <li className="sub-menu-link"><a href="#">Conserto de forno elétrico</a></li>
                            <li className="sub-menu-link"><a href="#">Reforma de microondas</a></li>
                            <li className="sub-menu-link"><a href="#">Busca e entrega</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <p>Comprar</p>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="#">Acessórios</a></li>
                            <li className="sub-menu-link"><a href="#">Microondas novos e usados</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <p>Informações</p>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="/location">Localização</a></li>
                            <li className="sub-menu-link"><a href="/photos">Fotos</a></li>
                            <li className="sub-menu-link"><a href="#">Avaliação na hora</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}><a href="#">Contato</a></li>
                </ul>
                <div className={color ? "search-icon" : "search-icon color-hero"}>
                    <Icon icon="ic:baseline-search" />
                </div>
            </nav>

            <div className="login-container">
                <a href="/login" className={color ? "login-link" : "login-link color-hero"}>Entrar</a>
            </div>
        </header>
    )
}

export default Menu 