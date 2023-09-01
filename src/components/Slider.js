import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

const SliderCom = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy {
                edges {
                    node {
                        id
                        img {
                            gatsbyImageData(height: 600)
                        }
                    }
                }
            }
        }
    `);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6500,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider
            {...settings}
            className="relative overflow-hidden max-w-[2000px] mx-auto"
        >
            {data.allDatoCmsSlajdy.edges.map(({ node }) => (
                <div key={node.id}>
                    <GatsbyImage
                        className="scale-up-top min-h-[13rem]"
                        loading="eager"
                        image={getImage(node.img)}
                        alt="lancuckiesady"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SliderCom;
