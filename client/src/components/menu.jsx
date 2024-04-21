import '../css/menu.css'
import { useState } from 'react'

function Menu() {
    const [color, setColor] = useState(false)

    const changeColor = function() {
        if(window.scrollY >= 75) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <header className={color ? "header-container" : "header-container bg-hero"}>
            <div className={color ? "logo" : "logo filter-hero"}>
                <a href="#"><img src="logo.png"></img></a>
            </div>
            <nav className="nav-container">
                <ul className="menu-links">
                    <li className={color ? "menu-link" : "menu-link color-hero"}><a href="#">Home</a></li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <a href="#">Serviços</a>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="#">Reparo de microondas</a></li>
                            <li className="sub-menu-link"><a href="#">Reparo de forno elétrico</a></li>
                            <li className="sub-menu-link"><a href="#">Reforma de microondas</a></li>
                            <li className="sub-menu-link"><a href="#">Busca e entrega</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <a href="#">Comprar</a>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="#">Acessórios</a></li>
                            <li className="sub-menu-link"><a href="#">Microondas novos e usados</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}>
                        <a href="#">Mais informações</a>
                        <ul className="sub-menu-links">
                            <li className="sub-menu-link"><a href="#">Localização</a></li>
                            <li className="sub-menu-link"><a href="#">Fotos</a></li>
                            <li className="sub-menu-link"><a href="#">Avaliação na hora</a></li>
                        </ul>
                    </li>
                    <li className={color ? "menu-link" : "menu-link color-hero"}><a href="#">Contato</a></li>
                </ul>
            </nav>

            <div className="login-container">
                <button className={color ? "login-link" : "login-link color-hero"}>Entrar</button>
            </div>
        </header>
    )
}

export default Menu 