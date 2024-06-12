import styles from '../css/services.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Services() {   
    const [services, setServices] = useState([]);
    const [error, setError] = useState('');

    // Adicionar os serviços existentes
    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/service/getCarousel'); 
            setServices(response.data); 
        } catch (error) {
            setError('Nenhum serviço foi encontrado, atualize o site e tente novamente!')
            console.log(error.response.data.msg);
        }
    };

    return (
        <div className={styles['services-container']}>
            <h2>Nossos serviços</h2>
            
            {error && (
                <div className="error-get">
                    <p>{error}</p>
                </div>
            )}
                
            <div className={styles['services-grid']}>
                {services.map((data, index) => (       
                    <div className={styles['service-item']} key={index}>
                        <div className={styles['service-icon']}>
                            <img src={`http://localhost:8080/services-img/${data.icon}`} className={styles['icon-carousel']} alt="Icone serviço"/>
                        </div>
                        <div className={styles['service-name']}>
                            <h4>{data.title}</h4>
                        </div>
                        <div className={styles['service-description']}>
                            <p>{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
