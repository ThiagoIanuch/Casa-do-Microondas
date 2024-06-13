import { useEffect, useState } from 'react';
import '../css/announcements.css';
import axios from 'axios';
import Slider from "react-slick";

function Announcements() {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/announcement/getCarousel');
            setAnnouncements(response.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        initialSlide: 1
    };

    return (
        <div className='announcements-container'>
            <Slider {...settings}>
                {announcements.map((data, index) => (                              
                    <div key={index}>
                        <img src={`http://localhost:8080/announcements-img/${data.image}`} alt={data.description}/>
                    </div>
                ))}
            </Slider>

            {/*
            <div className={styles['slider']}>
                <div className={styles['slides']}>
                    <input type="radio" name="botao" id={styles['b1']}></input>
                    <input type="radio" name="botao" id={styles['b2']}></input>
                    <input type="radio" name="botao" id={styles['b3']}></input>

                    <div className={`${styles['slide']} ${styles['first']}`}> 
                        <img src="ia-micoondas.jpg" alt="imagem 1" />
                    </div>

                    <div className={styles['slide']}> 
                        <img src="ia-micoondas2.jpg" alt="imagem 2" />
                    </div>

                    <div className={styles['slide']}> 
                        <img src="ia-micoondas3.jpg" alt="imagem 3" />
                    </div>
                    
                    <div className={styles['navigation-auto']}>
                        <div className={styles['auto-btn1']}></div>
                        <div className={styles['auto-btn2']}></div>
                        <div className={styles['auto-btn3']}></div>
                    </div>
                </div>

                <div className={styles['navigation-manual']}>
                    <label htmlFor={styles['b1']} className={styles['manual-btn']}></label>
                    <label htmlFor={styles['b2']} className={styles['manual-btn']}></label>
                    <label htmlFor={styles['b3']} className={styles['manual-btn']}></label>
                </div>
            </div>
            */}
        </div>
    );
}

export default Announcements;