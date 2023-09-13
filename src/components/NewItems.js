import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import Spinner from "./Spinner";
import Slider from "react-slick";

import { BsFillArrowRightSquareFill } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

const NewItems = () => {
    const [isDragging, setIsDragging] = useState(false);

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    const data = useStaticQuery(graphql`
        {
            allDatoCmsHugoBoss(sort: { position: ASC }) {
                edges {
                    node {
                        id
                        title
                        price
                        slug
                        img {
                            gatsbyImageData(
                                width: 150
                                placeholder: NONE
                                aspectRatio: 0.8
                            )
                        }
                    }
                }
            }
        }
    `);
    var settings = {
        arrows: true,
        infinite: true,
        speed: 700,
        pauseOnHover: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        beforeChange: () => setIsDragging(true),
        afterChange: () => setIsDragging(false),
    };
    const handleLinkClick = (e) => {
        if (isDragging) {
            e.preventDefault();
        }
    };
    return (
        <div className="wrapper mx-auto pt-12 px-2">
            <div className="flex-b px-2">
                <h2 className="text-2xl font-bold mb-2 tracking-wide">
                    Nowości
                </h2>
                <Link to="/" className="flex-c">
                    <p className="mr-1 font-medium">Zobacz Wszystkie</p>
                    <BsFillArrowRightSquareFill className="text-yellow-500" />
                </Link>
            </div>
            <Slider {...settings}>
                {data.allDatoCmsHugoBoss.edges.map(({ node }) => (
                    <Link
                        key={node.id}
                        to={node.slug}
                        onClick={handleLinkClick}
                        draggable="false"
                        className="border border-transparent hover:border-gray-200 hover:shadow-xl transition-all"
                    >
                        <div className="relative p-10 text-center flex items-center justify-center flex-col">
                            <GatsbyImage
                                loading="eager"
                                draggable="false"
                                image={getImage(node.img)}
                                alt={node.title}
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                            <div className="mt-4 px-1 w-full">
                                <p className="h-12 uppercase text-start font-bold text-sm">
                                    {node.title}
                                </p>
                                <div className="w-full h-[1px] bg-gray-300 mb-2" />
                                <div className="flex-b w-full font-medium">
                                    <p>{node.price} zł</p>
                                    <Link
                                        to={node.slug}
                                        title={`Kup ` + node.title}
                                        className="text-red-700"
                                    >
                                        Kupuj
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slider>
        </div>
    );
};

export default NewItems;
