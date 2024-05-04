import { useRef } from 'react';
import '../css/hero.css';

function Hero() {
    const scrollRef = useRef(null)

    const scrollPage = function() {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="hero-container">
            <video className="hero-background" autoPlay loop muted>
                <source type="video/mp4" src="background.mp4"></source>
            </video>

            <div className="hero-content-container">
                <div className="hero-site-name">
                    <h1>Casa do Microondas</h1>
                </div>
                <div className="hero-content">
                    <button className="hero-button" onClick={scrollPage}>Conheça nossos serviços</button>
                </div>
            </div>

            <div className="scroll" ref={scrollRef}></div>
        </div>
    )
}

export default Hero;
