import styles from '../css/forms.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function ServiceOrder({user}) {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Orçamento - Casa do Microondas";
    }, []);

    // Obter as marcas para o form
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetchBrands();
    }, []);

    const fetchBrands = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/brand/get'); 
            setBrands(response.data); 
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    // Obter os dados do form
    const [data, setData] = useState({
        phone: '',
        type: '',
        brand: '',
        model: '',
        description: ''
    });    

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }
    
    // Envia os dados
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await axios.post(`http://localhost:8080/api/service-order/send/${user.id}`, data);
            alert('Ordem de serviço aberta com sucesso! Você será contatado pelo seu telefone!')
            setErrorMessages([]);
            setData({
                phone: '',
                type: '',
                brand: '',
                model: '',
                description: ''
            });
        }
        catch (error) {
            setErrorMessages(error.response.data.errors);
        }
    }

    // Mensagens de erro
    const [errorMessages, setErrorMessages] = useState([])

    // Mostrar os erros
    const renderErrorMessages = (pathName) => {
        const error = errorMessages.find((error) => error.path === pathName);
    
        return (
            <div className={styles['error-messages']}>
                {error ? <span key={error.msg}>{'* ' + error.msg}</span> : null}
            </div>
        );
    }

    return (
        <div className={styles['page-content']}>
            <div className={`${styles['form-container']} ${styles['service-order']}`}>
                <div className={styles['form-title']}>Orçamento</div>

                {user ? (
                    <form onSubmit={handleSubmit}>
                        <input type="text" className={styles['form-input']} name="phone" autoComplete="tel-national" placeholder="Celular ou Telefone" value={data.phone} onChange={handleChange}></input>
                        {renderErrorMessages('phone')}

                        <input type="text" className={styles['form-input']} name="type" placeholder="Tipo de produto" value={data.type} onChange={handleChange}></input>
                        {renderErrorMessages('type')}

                        <select name="brand" className={styles['form-input']} value={data.brand} onChange={handleChange} >
                            <option value="">Selecione uma marca</option>
                            {brands.map(brand => (
                                <option key={brand.id} value={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                        {renderErrorMessages('brand')}

                        <input type="text" className={styles['form-input']} name="model" placeholder="Modelo do produto" value={data.model} onChange={handleChange}></input>
                        {renderErrorMessages('model')}

                        <textarea className={styles['form-text']} name="description" rows="2" cols="20" placeholder="Descrição do problema" value={data.description} onChange={handleChange}></textarea>
                        {renderErrorMessages('description')}

                        <input type="submit" className={styles['submit-btn']} value="Enviar"></input>
                    </form>                
                ) : (
                    <div className={styles['not-user-error']}>
                        <p>Para solicitar um orçamento é necessário possuir uma conta! </p>
                        <p>Faça seu <a href="/register">registro</a> ou <a href="/login">entre</a> com sua conta!</p>
                    </div>
                )}
            </div>
        </div>   
    )
}

export default ServiceOrder;