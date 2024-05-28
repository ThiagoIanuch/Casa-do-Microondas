import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';
import styles from '../css/location.module.css';

function Location() {
    return (
        <>
            <Menu />

            <div className={styles['streets']}>
                <p className={styles['address']}>Avenida Presidente Kennedy 410, Rebouças - Curitiba</p>
                <p className={styles['address']}>Rua Saturnino Miranda, 84 - Santa Felicidade - Curitiba</p>
            </div>

            <div className={styles['maps']}>
                <iframe
                    title="Mapa Avenida Presidente Kennedy"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7205.100835950869!2d-49.265392!3d-25.453290000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48c9e3e3e4b%3A0x94da37baf10ee50e!2sAv.%20Pres.%20Kennedy%2C%20410%20-%20Rebou%C3%A7as%2C%20Curitiba%20-%20PR%2C%2080220-200%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1715189885219!5m2!1spt-BR!2sus"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                <iframe
                    title="Mapa Rua Saturnino Miranda"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7208.270369061502!2d-49.33421562860487!3d-25.400285120868535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce1ae328a748b%3A0x7cfdac29470a291d!2sR.%20Saturnino%20Miranda%2C%2084%20-%20Santa%20Felicidade%2C%20Curitiba%20-%20PR%2C%2082030-320%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1715191856513!5m2!1spt-BR!2sus"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>

            <Footer />
        </>
    );
}

export default Location;