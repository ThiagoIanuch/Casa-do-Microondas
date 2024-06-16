import styles from '../css/menu.module.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Menu() {
    /* Alterar a cor do menu de acordo com o scroll*/
    const [color, setColor] = useState(false);
    const location = useLocation();

    const changeColor = () => {
        if (window.scrollY >= 75) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        if (location.pathname === '/') {
            window.addEventListener('scroll', changeColor);
        } else {
            setColor(true);
        }

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, [location.pathname]);

    const toggleMenu = () => {
        const navContainer = document.querySelector(`.${styles['nav-container']}`);
        const loginContainer = document.querySelector(`.${styles['login-container']}`);
        if (navContainer.style.display === 'flex') {
            navContainer.style.display = 'none';
            loginContainer.style.display = 'none';
        } else {
            navContainer.style.display = 'flex';
            loginContainer.style.display = 'flex';
        }
    };

    return (
        <header className={color ? styles['header-container'] : `${styles['header-container']} ${styles['bg-hero']}`}>
            <div className={styles['header-content']}>
                <div className={color ? styles['logo'] : `${styles['logo']} ${styles['filter-hero']}`}>
                    <a href="/"><img src="logo.png" alt="Logo"></img></a>
                </div>

                <div className={styles['menu-open-container']}>
                    <div className={styles['icon-container']} onClick={toggleMenu}>
                        <Icon icon="ic:round-menu" className={styles['menu-open-icon']}/>
                    </div>
                </div>
            </div>
            <nav className={styles['nav-container']}>
                <ul className={styles['menu-links']}>
                    <li className={color ? styles['menu-link'] : `${styles['menu-link']} ${styles['color-hero']}`}><a href="/">Home</a></li>
                    <li className={color ? styles['menu-link'] : `${styles['menu-link']} ${styles['color-hero']}`}>
                        <a href="/#services-section">Serviços</a>
                    </li>
                    <li className={color ? `${styles['menu-link']} ${styles['responsive-buy']}` : `${styles['menu-link']} ${styles['color-hero']} ${styles['responsive-buy']}`}>
                        <p>Comprar</p>
                        <ul className={styles['sub-menu-links']}>
                            <li className={styles['sub-menu-link']}><a href="/construction">Acessórios</a></li>
                            <li className={styles['sub-menu-link']}><a href="/construction">Microondas novos e usados</a></li>
                        </ul>
                    </li>
                    <li className={color ? `${styles['menu-link']} ${styles['responsive-info']}` : `${styles['menu-link']} ${styles['color-hero']} ${styles['responsive-info']}`}>
                        <p>Informações</p>
                        <ul className={styles['sub-menu-links']}>
                            <li className={styles['sub-menu-link']}><a href="/#info-section">Horários</a></li>
                            <li className={styles['sub-menu-link']}><a href="/location">Localização</a></li>
                            <li className={styles['sub-menu-link']}><a href="/photos">Fotos</a></li>
                        </ul>
                    </li>
                    <li className={color ? styles['menu-link'] : `${styles['menu-link']} ${styles['color-hero']}`}><a href="/service-order">Orçamento</a></li>
                    <li className={color ? styles['menu-link'] : `${styles['menu-link']} ${styles['color-hero']}`}><a href="/contact">Contato</a></li>
                </ul>
                {/*<div className={color ? styles['search-icon'] : `${styles['search-icon']} ${styles['color-hero']}`}>
                    <Icon icon="ic:baseline-search" />
                </div>*/}
            </nav>

            <div className={styles['login-container']}>
                <a href="/login" className={color ? styles['login-link'] : `${styles['login-link']} ${styles['color-hero']}`}>Entrar</a>
                <a href="/register" className={color ? `${styles['login-link']} ${styles['register']}` : `${styles['login-link']} ${styles['color-hero']} ${styles['register']}`}>Registrar</a>
            </div>
        </header>
    );
}

export default Menu;