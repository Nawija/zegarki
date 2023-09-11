import React from "react";
import { Link } from "gatsby";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";
import { StaticImage } from "gatsby-plugin-image";

const NewItems = () => {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 700,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    return (
        <div className="wrapper mx-auto pt-12">
            <div className="flex-b">
                <h2 className="text-2xl font-bold mb-2 tracking-wide">
                    Nowości
                </h2>
                <Link to="/" className="flex-c">
                    <p className="mr-1">Zobacz Wszystkie</p>
                    <BsFillArrowRightSquareFill className="text-yellow-500" />
                </Link>
            </div>
            <Slider {...settings}>
                <div className="p-1 ">
                    <div className="p-8 border text-center flex items-center justify-center flex-col">
                        <StaticImage
                            width={200}
                            loading="eager"
                            quality={100}
                            src="https://vivab2b.pl/img/products/68/60/33_med.jpg"
                            alt="permwatch"
                        />
                        <p>Zegarek CASIO WS-1400H-1AVEF</p>
                    </div>
                </div>

                <div className="p-1">
                    <div className="p-8 border text-center flex items-center justify-center flex-col">
                        <StaticImage
                            width={200}
                            loading="eager"
                            quality={100}
                            src="https://vivab2b.pl/img/products/68/24/5_med.jpg"
                            alt="permwatch"
                        />
                        <p>Zegarek CASIO WS-1400H-1AVEF</p>
                    </div>
                </div>

                <div className="p-1">
                    <div className="p-8 border text-center flex items-center justify-center flex-col">
                        <StaticImage
                            width={200}
                            loading="eager"
                            quality={100}
                            src="https://vivab2b.pl/img/products/68/25/9_med.jpg"
                            alt="permwatch"
                        />
                        <p>Zegarek CASIO WS-1400H-1AVEF</p>
                    </div>
                </div>

                <div className="p-1">
                    <div className="p-8 border text-center flex items-center justify-center flex-col">
                        <StaticImage
                            width={200}
                            loading="eager"
                            quality={100}
                            src="https://vivab2b.pl/img/products/68/24/5_med.jpg"
                            alt="permwatch"
                        />
                        <p>Zegarek CASIO WS-1400H-1AVEF</p>
                    </div>
                </div>

                <div className="p-1">
                    <div className="p-8 border text-center flex items-center justify-center flex-col">
                        <StaticImage
                            width={200}
                            loading="eager"
                            quality={100}
                            src="https://vivab2b.pl/img/products/68/25/9_med.jpg"
                            alt="permwatch"
                        />
                        <p>Zegarek CASIO WS-1400H-1AVEF</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default NewItems;
