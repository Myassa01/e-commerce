import React from "react";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "50% off on all men's Wear",
    description:
      "Lorem his life will forever be changed. The pain will be great, the coaching will be successful, but it will happen at the same time as with work and pain some great things.",
  },
  {
    id: 2,
    img: Image1,
    title: "30% off on all women's Wear",
    description:
      "Lorem his life will forever be changed. The pain will be great, the coaching will be successful, but it will happen at the same time as with work and pain some great things.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all products sale",
    description:
      "Lorem his life will forever be changed. The pain will be great, the coaching will be successful, but it will happen at the same time as with work and pain some great things.",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots:false ,
    arrows:false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover : false ,
    pauseOnFocus : true,

  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px]
     sm:min-h-[650px] bg-gray-100 flex justify-center items-center
      dark:bg-gray-950 dark:text-white duration-200"
    >
      {/* Background shape */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 absolute 
      -top-1/2 right-0 rounded-3xl rotate-45"
      ></div>

      {/* Hero section */}
      <div className="container pb-8 sm:pb-0 max-w-4xl mx-auto">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duraction ="500"
                   className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {item.title}
                  </h1>
                  <p  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duraction ="500" className="text-sm">{item.description}</p>
                  <div  data-aos="zoom-in"
                  data-aos-once="true"
                  data-aos-duraction ="500">
                    <button
                      className="bg-gradient-to-r from-primary  to-secondary
                       hover:scale-105
                duration-200 text-white py-2 px-4 rounded-full"
                    onClick={handleOrderPopup}>
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2">
                  <div 
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[300px] h-[300px] sm:h-[450px] 
                   sm:scale-120 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
