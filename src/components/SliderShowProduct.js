import React, { useRef, useEffect, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import Spinner from "./Spinner";

const AsNavFor = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    const data = useStaticQuery(graphql`
        {
            allDatoCmsHugoBoss(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                width: 320
                                placeholder: NONE
                                aspectRatio: 0.8
                            )
                        }
                    }
                }
            }
        }
    `);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    useEffect(() => {
        slider1Ref.current.slickGoTo(
            slider2Ref.current.innerSlider.state.currentSlide
        );
        slider2Ref.current.slickGoTo(
            slider1Ref.current.innerSlider.state.currentSlide
        );
    }, []);

    return (
        <div className="w-[42rem]">
            <div className="border h-96 w-full border-gray-200 overflow-hidden relative">
                <Slider
                    arrows={false}
                    asNavFor={slider2Ref.current}
                    ref={slider1Ref}
                >
                    {data.allDatoCmsHugoBoss.edges.map(({ node }) => (
                        <div className="text-center">
                            <GatsbyImage
                                loading="eager"
                                draggable="false"
                                image={getImage(node.img)}
                                alt={node.title}
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-full">
                <Slider
                    asNavFor={slider1Ref.current}
                    ref={slider2Ref}
                    arrows={false}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                >
                    {data.allDatoCmsHugoBoss.edges.map(({ node }) => (
                        <div className="relative p-4 text-center fle-s flex-col border mt-2 cursor-pointer">
                            <GatsbyImage
                                loading="eager"
                                draggable="false"
                                className="w-20"
                                image={getImage(node.img)}
                                alt={node.title}
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default AsNavFor;
