import Menu from "../components/menu";
import Footer from "../components/footer";
import styles from '../css/photos.module.css';
import { useEffect } from "react";

function Photos() {
    // Alterar o nome da página
    useEffect(() => {
        document.title = "Fotos - Casa do Microondas";
    }, []);

    return (
        <>
            <Menu />

            <div className={styles['photos-container']}>
                <h2>Fotos da Casa do Microondas</h2>
                <div className={styles['photos']}>
                    <a href="foto 1.jpg" className={styles['item']}>
                        <img src="foto 1.jpg" alt="Foto 1 - Casa do Microondas" />
                    </a>

                    <a href="foto 2.jpg" className={styles['item']}>
                        <img src="foto 2.jpg" alt="Foto 2 - Casa do Microondas" />
                    </a>

                    <a href="foto 3.jpg" className={styles['item']}>
                        <img src="foto 3.jpg" alt="Foto 3 - Casa do Microondas" />
                    </a>

                    <a href="foto 4.jpg" className={styles['item']}>
                        <img src="foto 4.jpg" alt="Foto 4 - Casa do Microondas" />
                    </a>

                    <a href="foto 5.jpg" className={styles['item']}>
                        <img src="foto 5.jpg" alt="Foto 5 - Casa do Microondas" />
                    </a>

                    <a href="foto 6.jpg" className={styles['item']}>
                        <img src="foto 6.jpg" alt="Foto 6 - Casa do Microondas" />
                    </a>

                    <a href="foto 7.jpg" className={styles['item']}>
                        <img src="foto 7.jpg" alt="Foto 7 - Casa do Microondas" />
                    </a>

                    <a href="foto 8.jpg" className={styles['item']}>
                        <img src="foto 8.jpg" alt="Foto 8 - Casa do Microondas" />
                    </a>

                    <a href="foto 9.jpg" className={styles['item']}>
                        <img src="foto 9.jpg" alt="Foto 9 - Casa do Microondas" />
                    </a>

                    <a href="foto 10.jpg" className={styles['item']}>
                        <img src="foto 10.jpg" alt="Foto 10 - Casa do Microondas" />
                    </a>

                    <a href="foto 11.jpg" className={styles['item']}>
                        <img src="foto 11.jpg" alt="Foto 11 - Casa do Microondas" />
                    </a>

                    <a href="foto 12.jpg" className={styles['item']}>
                        <img src="foto 12.jpg" alt="Foto 12 - Casa do Microondas" />
                    </a>

                    <a href="foto 13.jpg" className={styles['item']}>
                        <img src="foto 13.jpg" alt="Foto 13 - Casa do Microondas" />
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Photos;