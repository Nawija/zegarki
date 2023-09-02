import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const SliderCom = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy(sort: { position: ASC }) {
                edges {
                    node {
                        id
                        title
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
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4400,
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
                <div className="relative" key={node.id}>
                    <div className="relative overflow-hidden">
                        <GatsbyImage
                            className="scale-zoom min-h-[13rem]"
                            loading="eager"
                            image={getImage(node.img)}
                            alt="seovileo"
                        />
                    </div>
                    <div className="max-w-[2000px] mx-auto w-full py-3 relative z-30 text-main">
                        <div
                            style={{
                                background: `${node.img.colors[0].hex}`,
                            }}
                            className="h-full w-full absolute top-0 left-0 opacity-5"
                        />
                        <div className="flex flex-col items-center justify-between gap-2 lg:flex-row max-w-screen-xl mx-auto">
                            <p className=" font-semibold">{node.title}</p>

                            <div className="flex items-center justify-center gap-4 lg:justify-start">
                                <span className="text-sm font-semibold uppercase tracking-wide z-40">
                                    Social Media
                                </span>
                                <span className="h-px w-12 bg-green-500"></span>

                                <div className="flex gap-3 z-10">
                                    <Link
                                        to="/"
                                        target="_blank"
                                        className="text-2xl transition-colors  hover:text-blue-500 active:text-gray-600"
                                    >
                                        <AiFillFacebook />
                                    </Link>
                                    <Link
                                        to="/"
                                        target="_blank"
                                        className="text-2xl transition-colors  hover:text-yellow-500 active:text-gray-600"
                                    >
                                        <AiFillInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`absolute top-0 left-0 h-full w-full opacity-30 rounded-b-lg z-0 mix-blend-multiply`}
                        style={{
                            background: `linear-gradient(to top, ${node.img.colors[1].hex} 0%, ${node.img.colors[0].hex} 100%)`,
                        }}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SliderCom;
