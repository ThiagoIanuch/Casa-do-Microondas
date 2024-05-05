import Menu from '../components/menu.jsx'
import Footer from '../components/footer.jsx'
import '../css/login.css'

function Login() {
    return (
        <>
            <Menu></Menu>

            <div className="login-form-container">
                <div className="form-container">
                    <h2>Entrar</h2>
                    <form>
                        <input type="text" className="login-field" placeholder="Nome de usuário ou email"></input>
                        <input type="text" className="login-field" placeholder="Senha"></input>
                        <input type="submit" className="login-button"></input>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </>
    )
}

export default Login