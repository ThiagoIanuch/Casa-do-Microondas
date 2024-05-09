import { useState, useEffect } from 'react';
import '../css/footer.css'
import { Icon } from '@iconify/react';

function Footer() {
    
    const changeTheme = (selectedTheme) => {
        if(selectedTheme === 'dark-theme') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }

        localStorage.setItem('theme', selectedTheme);
    }

    const storedTheme = localStorage.getItem('theme');
    changeTheme(storedTheme);

    return(
        <footer className="footer-container">
            <div id="footer-content">
                <div id="footer-contacts">
                    <h3>Fale conosco</h3>
                    <div id="footer-numbers">
                        <div className="footer-link" id="telephone">
                            <Icon icon="iconamoon:phone-fill" className="footer-icon"/>                            
                            <p>(41) 3332-8000</p>
                        </div>
                        <div className="footer-link" id="whatsapp">
                            <Icon icon="ic:baseline-whatsapp" className="footer-icon"/>
                            <p>(41) 98516-3600</p>
                        </div>
                        <div className="footer-link" id="whatsapp">
                            <Icon icon="ic:baseline-whatsapp" className="footer-icon"/>
                            <p>(41) 98516-3602</p>
                        </div>
                    </div>
                </div>
                <div className="footer-shops">
                    <ul className="footer-list">
                        <li>
                            <h3>Onde estamos</h3>
                        </li>
                        <li>
                            <a href="/location" className="footer-link">Loja 1 - Avenida Presidente Kennedy 410, Rebouças - Curitiba</a>
                        </li>
                        <li>
                            <a href="/location" className="footer-link">Loja 2 - Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-budgets">
                    <ul className="footer-list">
                        <li>
                            <h3>Peça ja seu orçamento</h3>
                        </li>
                        <li>
                            <p>Contate-nos! Buscamos e entregamos seu aparelho </p>
                        </li>
                        <li>
                            <p>Devido a pandemia do COVID-19 estamos atendendo das 8:30 as 17:30 e a avaliação na hora é feita até as 16h</p>
                        </li>
                        <li className="contact-link-container">
                            <a href="/construction" className="footer-link contact-link">
                                Entre em contato
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-themes">
                    <ul className="footer-list">
                        <li>
                            <h3>Tema</h3>
                        </li>
                        <li>
                            <div className="footer-theme" onClick={() => changeTheme('white-theme')}>
                                <Icon icon="ph:sun" />
                                <p>Tema claro</p>
                            </div>
                        </li>
                        <li>
                            <div className="footer-theme" onClick={() => changeTheme('dark-theme')}>
                                <Icon icon="ph:moon" />              
                                <p>Tema escuro</p>
                            </div>
                        </li>
                        <li>
                            <div className="footer-theme" onClick={() => changeTheme('system-theme')}>
                                <Icon icon="ph:desktop" />                              
                                <p>Tema do sitema</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>© Casa do Microondas. 2024 Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer