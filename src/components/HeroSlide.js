import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import { StaticImage } from "gatsby-plugin-image";

const HeroSlide = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 3600,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings} className="z-10">
            <StaticImage
                loading="eager"
                quality={100}
                className="min-h-[14rem]"
                imgClassName="min-h-[14rem]"
                src="https://vivab2b.pl/img/bannery/GW1970-WSP%C3%93LNY_BANER.jpg"
                alt="permwatch"
            />

            <StaticImage
                loading="eager"
                quality={100}
                className="min-h-[14rem]"
                imgClassName="min-h-[14rem]"
                src="https://vivab2b.pl/img/bannery/PAUL-LORENS-NOWO%C5%9ACI.webp"
                alt="permwatch"
            />
        </Slider>
    );
};

export default HeroSlide;
