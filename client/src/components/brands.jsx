import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/brands.css'

function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: '200',
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
      <div className="brands-container">
        <h2>Marcas que reparamos</h2>
        <Slider {...settings}>
          <div>
            <img src="s1.png" alt="" />
          </div>
          <div>
            <img src="s2.png" alt="" />
          </div>
          <div>
            <img src="s3.png" alt="" />
          </div>
          <div>
            <img src="s4.png" alt="" />
          </div>
          <div>
            <img src="s5.png" alt="" />
          </div>
          <div>
            <img src="s6.png" alt="" />
          </div>
          <div>
            <img src="s7.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Brands;