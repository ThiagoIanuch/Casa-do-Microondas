import { useRef } from 'react';
import styles from '../css/hero.module.css';

function Hero() {
    const scrollRef = useRef(null);

    const scrollPage = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles['hero-container']}>
            <video className={styles['hero-background']} autoPlay loop muted>
                <source type="video/mp4" src="background.mp4"></source>
            </video>

            <div className={styles['hero-content-container']}>
                <div className={styles['hero-site-name']}>
                    <h1>Casa do Microondas</h1>
                </div>
                <div className={styles['hero-content']}>
                    <button className={styles['hero-button']} onClick={scrollPage}>Conheça nossos serviços</button>
                </div>
            </div>

            <div className="scroll" ref={scrollRef}></div>
        </div>
    );
}

export default Hero;