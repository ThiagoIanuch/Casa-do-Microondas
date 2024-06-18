import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/forms.module.css';

function Register() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Registrar - Casa do Microondas";
    }, []);

    // Variáveis para obter os dados do formulário
    const [userData, setUserData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: ''
    });

    // Enviar a alteração dos dados
    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    // Mensagens de erro
    const [errorMesages, setErrorMessages] = useState([])

    // Mostrar os erros
    const renderErrorMessages = (pathName) => {
        const error = errorMesages.find((error) => error.path === pathName);
    
        return (
            <div className={styles['error-messages']}>
                {error ? <span key={error.msg}>{'* ' + error.msg}</span> : null}
            </div>
        );
    }

    // Enviar os dados para a API
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/user/register', userData)
            setErrorMessages([]);
            alert('Registrado com sucesso, faça seu login')
            setUserData({
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            setErrorMessages(error.response.data.errors);
        }
    }

    return (
        <div className={styles['page-content']}>
            <div className={styles['form-container']}>
                <div className={styles['form-title']}>Registrar</div>

                <form onSubmit={handleSubmit}>
                    <input type="text" className={styles['form-input']} name="email" autoComplete="email" placeholder="E-mail" value={userData.email} onChange={handleChange} />
                    {renderErrorMessages('email')}

                    <input type="text" className={styles['form-input']} name="firstName" autoComplete="given-name" placeholder="Primeiro nome" value={userData.firstName} onChange={handleChange} />
                    {renderErrorMessages('firstName')}

                    <input type="text" className={styles['form-input']} name="lastName" autoComplete="family-name" placeholder="Sobrenome" value={userData.lastName} onChange={handleChange} />
                    {renderErrorMessages('lastName')}
        
                    <input type="password" className={styles['form-input']} name="password" autoComplete="new-password" placeholder="Senha" value={userData.password} onChange={handleChange} />
                    {renderErrorMessages('password')}

                    <input type="password" className={styles['form-input']} name="confirmPassword" autoComplete="new-password" placeholder="Confirmar a senha" value={userData.confirmPassword} onChange={handleChange} />
                    {renderErrorMessages('confirmPassword')}

                    <input type="submit" className={styles['submit-btn']} value="Registrar" />
                </form>
            </div>
        </div>
    )
}

export default Register;
