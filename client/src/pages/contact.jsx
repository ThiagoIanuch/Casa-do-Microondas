import Menu from '../components/menu';
import Footer from '../components/footer';
import styles from '../css/forms.module.css';
import { useEffect } from 'react';

function Contact() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Contato - Casa do Microondas";
    }, []);

    return (
        <>
            <Menu />

            <div className={styles['page-content']}>
                <div className={`${styles['form-container']} ${styles['contact']}`}>
                    <div className={styles['form-title']}>Contato</div>

                    <form>
                        <input type="text" className={styles['form-input']} name="name" autoComplete="name" placeholder="Nome"></input>

                        <input type="text" className={styles['form-input']} name="email" autoComplete="email" placeholder="E-mail"></input>
            
                        <input type="text" className={styles['form-input']} name="phone" autoComplete="tel" placeholder="Telefone"></input>

                        <input type="text" className={styles['form-input']} name="subject" placeholder="Assunto"></input>

                        <textarea className={styles['form-text']} name="message" rows="5" cols="20" placeholder="Mensagem"></textarea>

                        <input type="submit" className={styles['submit-btn']} value="Entrar"></input>
                    </form>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default Contact;