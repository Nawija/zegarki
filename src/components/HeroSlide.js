import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

const HeroSlide = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy(sort: { position: ASC }) {
                edges {
                    node {
                        id
                        img {
                            colors {
                                hex
                            }
                            gatsbyImageData(
                                height: 700
                                placeholder: DOMINANT_COLOR
                            )
                        }
                    }
                }
            }
        }
    `);
    const settings = {
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
        <Slider {...settings} className="z-10 text-center bg-gray-100">
            {data.allDatoCmsSlajdy.edges.map(({ node }) => (
                <GatsbyImage
                    className="min-h-[14rem] max-w-screen-2xl mx-auto"
                    loading="eager"
                    image={getImage(node.img)}
                    alt="permwatch baner"
                />
            ))}
        </Slider>
    );
};

export default HeroSlide;
