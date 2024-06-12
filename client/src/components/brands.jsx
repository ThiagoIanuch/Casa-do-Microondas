import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/brands.css'
import { useState, useEffect } from "react";
import axios from 'axios';

function Brands() {
  // Configurações do slider
  const settings = {
    dots: false,
    infinite: true,
    speed: '200',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  // Adicionar as marcas
  const [brands, setBrands] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/brand/getCarousel'); 
        setBrands(response.data); 
      } catch (error) {
        setError('Nenhuma marca foi encontrada, atualize o site e tente novamente!')
        console.log(error.response.data.msg);
      }
  };

  return (
    <div className="slider-container">
      <div className="brands-container">
        <h2>Marcas que reparamos</h2>

        {error && (
          <div className="error-get error-brand">
              <p>{error}</p>
          </div>
        )}

        {!error && (
          <Slider {...settings}>
            {brands.map((data, index) => (                              
              <div key={index}>
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                  <img src={`http://localhost:8080/brands-img/${data.image}`} alt={data.name}/>
                </a>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Brands;