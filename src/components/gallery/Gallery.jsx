import React, { useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import Slider from "react-slick";
import "./gallery.scss";

// Import images
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import ten from "../../assets/images/10.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import five from "../../assets/images/5.png";
import six from "../../assets/images/6.png";
import seven from "../../assets/images/7.png";
import eight from "../../assets/images/8.png";
import nine from "../../assets/images/9.png";

// List of images
const images = [
  { idx: 1, src: one, alt: "one" },
  { idx: 2, src: two, alt: "two" },
  { idx: 3, src: three, alt: "three" },
  { idx: 4, src: four, alt: "four" },
  { idx: 5, src: five, alt: "five" },
  { idx: 6, src: six, alt: "six" },
  { idx: 10, src: ten, alt: "ten" },
  { idx: 7, src: seven, alt: "seven" },
  { idx: 8, src: eight, alt: "eight" },
  { idx: 9, src: nine, alt: "nine" },
];

const Gallery = () => {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <IoMdArrowDroprightCircle />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <IoMdArrowDropleftCircle />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    customPaging: () => <div className="custom-dot" />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="gallery">
      <h1>Image Gallery</h1>

      <Slider {...settings} className="gallery_slider">
        {images.map(({ idx, src, alt }) => (
          <div
            key={idx}
            className={idx === imageIndex ? "slide activeSlide" : "slide"}
          >
            <img src={src} alt={alt} className="gallery_image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
