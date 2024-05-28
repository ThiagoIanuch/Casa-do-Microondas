import Menu from '../components/menu.jsx'
import Footer from '../components/footer.jsx'
import styles from '../css/forms.module.css'

function Login() {
    return (
        <>
            <Menu></Menu>

            <div className={styles['page-content']}>
                <div className={styles['form-container']}>
                    <div className={styles['form-title']}>Entrar</div>

                    <form>
                        <input type="text" className={styles['form-input']} name="email" autoComplete="email" placeholder="E-mail"></input>
            
                        <input type="password" className={styles['form-input']} name="password" autoComplete="password" placeholder="Senha"></input>

                        <input type="submit" className={styles['submit-btn']} value="Entrar"></input>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Login