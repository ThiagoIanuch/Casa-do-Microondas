import Footer from '../components/footer.jsx'
import styles from '../css/forms.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Entrar - Casa do Microondas";
    }, []);

    // Obter dados
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value});
    }

    // Enviar
    const navigate = useNavigate('/')

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8080/api/user/login', data, {
                withCredentials: true
            });
            window.location.href = '/';
        }
        catch (error) {
            setErrorMessage(error.response.data.msg);
        }
    }

    // Mensagens de erro
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className={styles['page-content']}>
            <div className={styles['form-container']}>
                <div className={styles['form-title']}>Entrar</div>

                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles['form-input']} name="email" autoComplete="email" placeholder="E-mail" onChange={handleChange}></input>

                    <input type="password" className={styles['form-input']} name="password" autoComplete="password" placeholder="Senha" onChange={handleChange}></input>
                    
                    {errorMessage && (
                        <div className={styles['error-messages']}>
                            <span>{'* ' + errorMessage}</span>
                        </div>
                    )}

                    <input type="submit" className={styles['submit-btn']} value="Entrar"></input>
                </form>
            </div>
        </div>
    )
}

export default Login