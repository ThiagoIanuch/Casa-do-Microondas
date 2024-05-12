import Menu from '../components/menu';
import Footer from '../components/footer';
import '../css/contact.css'

function Contact(){
    return(
        <>
            <Menu></Menu>
            <div className="page-header">
                <h1>Dúvidas - Orçamentos - Contato</h1>
                    <hr />
                <div className="contact-form-container">
                    <div className="form-container">
                        <h2>Preencha o formulário Abaixo</h2>
                        <p>Entre em contato através de nosso formulário, lhe responderemos o mais breve possível!</p>
                        <form>
                            <input type="text" className="contact-field" placeholder="Nome"></input>
                            <input type="text" className="contact-field" placeholder="E-mail"></input>
                            <input type="text" className="contact-field" placeholder="Assunto"></input>
                            <input type="text" className="contact-field" placeholder="Telefone"></input>
                            <textarea placeholder="Mensagem" name="mensagem" id="mensagem" rows="10" cols="20"></textarea>
                            <input type="submit" className="login-button"></input>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Contact;