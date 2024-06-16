import { Icon } from '@iconify/react';
import styles from '../css/footer.module.css';

function Footer() {

    const changeTheme = (selectedTheme) => {
        if (selectedTheme === 'dark-theme') {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }

        localStorage.setItem('theme', selectedTheme);
    }

    const storedTheme = localStorage.getItem('theme');
    changeTheme(storedTheme);

    return (
        <footer className={styles['footer-container']}>
            <div id={styles['footer-content']}>
                <div id={styles['footer-contacts']}>
                    <h3>Fale conosco</h3>
                    <div id={styles['footer-numbers']}>
                        <div className={styles['footer-link']} id={styles['telephone']}>
                            <Icon icon="iconamoon:phone-fill" className={styles['footer-icon']}/>
                            <p>(41) 3332-8000</p>
                        </div>
                        <div className={styles['footer-link']} id={styles['whatsapp']}>
                            <Icon icon="ic:baseline-whatsapp" className={styles['footer-icon']}/>
                            <a href="https://wa.me/5541985163600" target='_blank'>(41) 98516-3600</a>
                        </div>
                        <div className={styles['footer-link']} id={styles['whatsapp']}>
                            <Icon icon="ic:baseline-whatsapp" className={styles['footer-icon']}/>
                            <a href="https://wa.me/5541985163602" target='_blank'>(41) 98516-3602</a>
                        </div>
                        <div className={styles['footer-link']} id={styles['social-links']}>
                            <a href="/contact"><Icon icon="ic:sharp-email" id={styles['email']} /></a>
                            <a href="https://www.instagram.com/casadomicroondascwb/" target='_blank'><Icon icon="skill-icons:instagram" id={styles['instagram']}/></a>
                            <a href="https://www.facebook.com/casadomicroondascuritiba" target='_blank'><Icon icon="devicon:facebook" id={styles['facebook']} /></a>
                        </div>
                    </div>
                </div>
                <div className={styles['footer-shops']}>
                    <ul className={styles['footer-list']}>
                        <li>
                            <h3>Onde estamos</h3>
                        </li>
                        <li>
                            <a href="/location" className={styles['footer-link']}>Loja 1 - Avenida Presidente Kennedy 410, Rebouças - Curitiba</a>
                        </li>
                        <li>
                            <a href="/location" className={styles['footer-link']}>Loja 2 - Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba</a>
                        </li>
                    </ul>
                </div>
                <div className={styles['footer-budgets']}>
                    <ul className={styles['footer-list']}>
                        <li>
                            <h3>Peça já seu orçamento</h3>
                        </li>
                        <li>
                            <p>Abra um pré-os em nosso site! Buscamos e entregamos seu aparelho </p>
                        </li>
                        <li>
                            <p>Estamos atendendo de Seg a Sex das 08h30 às 17h30 e Sab das 09h às 13h</p>
                        </li>
                        <li>
                            <p>A avaliação na hora é feita até às 16h.</p>
                        </li>
                        <li className={styles['contact-link-container']}>
                            <a href="/contact" className={`${styles['footer-link']} ${styles['contact-link']}`}>
                                Abra sua pré-os
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles['footer-themes']}>
                    <ul className={styles['footer-list']}>
                        <li>
                            <h3>Tema</h3>
                        </li>
                        <li>
                            <div className={`${styles['footer-theme']}`} onClick={() => changeTheme('white-theme')}>
                                <Icon icon="ph:sun" />
                                <p>Tema claro</p>
                            </div>
                        </li>
                        <li>
                            <div className={`${styles['footer-theme']}`} onClick={() => changeTheme('dark-theme')}>
                                <Icon icon="ph:moon" />              
                                <p>Tema escuro</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles['copyright']}>
                <p>© Casa do Microondas. 2024 Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;