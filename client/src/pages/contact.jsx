import Menu from '../components/menu';
import Footer from '../components/footer';
import styles from '../css/forms.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function Contact() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Contato - Casa do Microondas";
    }, []);

    // Obtem os dados
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });    

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }

    // Envia os dados
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await axios.post('http://localhost:8080/api/contact/send', data);
            alert('Mensagem enviada com sucesso')
            setErrorMessages([]);
            setData({
                name: '',
                email: '',
                subject: '',
                message: ''
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
        <>
            <Menu />

            <div className={styles['page-content']}>
                <div className={`${styles['form-container']} ${styles['contact']}`}>
                    <div className={styles['form-title']}>Contato</div>

                    <form onSubmit={handleSubmit}>
                        <input type="text" className={styles['form-input']} name="name" autoComplete="name" placeholder="Nome" value={data.name} onChange={handleChange}></input>
                        {renderErrorMessages('name')}

                        <input type="text" className={styles['form-input']} name="email" autoComplete="email" placeholder="E-mail" value={data.email} onChange={handleChange}></input>
                        {renderErrorMessages('email')}

                        <input type="text" className={styles['form-input']} name="subject" placeholder="Assunto" value={data.subject} onChange={handleChange}></input>
                        {renderErrorMessages('subject')}

                        <textarea className={styles['form-text']} name="message" rows="2" cols="20" placeholder="Mensagem" value={data.message} onChange={handleChange}></textarea>
                        {renderErrorMessages('message')}

                        <input type="submit" className={styles['submit-btn']} value="Enviar"></input>
                    </form>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Contact;