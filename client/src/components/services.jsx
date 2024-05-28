import styles from '../css/services.module.css';
import { Icon } from '@iconify/react';

function Services() {   
    return (
        <div className={styles['services-container']}>
            <h2>Nossos serviços</h2>
            
            <div className={styles['services-grid']}>
                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="material-symbols-light:microwave-outline-rounded" />
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Conserto de microondas</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Consertamos o seu microondas em 30 minutos. Temos mais de 2 mil tipos de componentes para substituição imediata.</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>

                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="ph:oven-light" />      
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Conserto de forno elétrico</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Consertamos e reformamos seu forno em 4 horas.</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>

                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="material-symbols-light:build-outline" />
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Reforma de microondas</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Se o seu aparelho é antigo e tem ferrugem, vale a pena reformar. Aparelhos antigos são mais duráveis, mais potentes e não vazam microondas. Hoje todos as marcas existentes são de origem da China.</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>

                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="ion:cart-outline" />
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Microondas novos e usados</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Temos microondas a pronta entrega de diversas marcas e modelos direto da fábrica. 127V e 220V.</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>

                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="ion:cart-outline" />
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Acessórios originais</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Temos pratos, roldanas, cruzetas e outro acessórios para forno de microondas</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>

                <div className={styles['service-item']}>
                    <div className={styles['service-icon']}>
                        <Icon icon="circum:delivery-truck" />
                    </div>
                    <div className={styles['service-name']}>
                        <h4>Serviço de busca e entrega</h4>
                    </div>
                    <div className={styles['service-description']}>
                        <p>Buscamos o seu aparelho em toda Curitiba.</p>
                    </div>
                    <div className={styles['services-link']}>
                        <a href="/construction"><button className={styles['service-button']}>Saiba mais</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
