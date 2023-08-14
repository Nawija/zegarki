import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InfoSale from "../components/infoSale";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy {
                edges {
                    node {
                        img {
                            gatsbyImageData(width: 1600, height: 550)
                        }
                    }
                }
            }

            allDatoCmsProjekty(sort: { position: ASC }) {
                edges {
                    node {
                        slug
                        title

                        img {
                            gatsbyImageData(height: 200)
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
        autoplay: false,
        autoplaySpeed: 3600,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [isDragging, setIsDragging] = useState(false);
    const settingsCircle = {
        beforeChange: () => {
            setIsDragging(true);
        },
        afterChange: () => {
            setIsDragging(false);
        },
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleLinkClick = (event) => {
        if (isDragging) {
            event.preventDefault();
        }
    };

    return (
        <>
            <InfoSale />
            <Layout>
                <div className="text-center">
                    <Slider {...settings}>
                        {data.allDatoCmsSlajdy.edges.map(({ node }) => (
                            <GatsbyImage
                                loading="eager"
                                className="min-h-[14rem]"
                                imgClassName="min-h-[14rem]"
                                image={getImage(node.img)}
                                alt="lancuckiesady"
                            />
                        ))}
                    </Slider>
                </div>

                <div className="mx-auto max-w-6xl py-4 px-6 sm:px-12 lg:px-0">
                    <h1 className="pt-6 pb-2 text-xl text-center font-bold">
                        Where does it come from? - jak powstają soki naturalne?
                    </h1>
                    <div className="h-[1px] bg-green-600 w-[20%] mx-auto mb-8" />
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem
                        Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                        Finibus Bonorum et Malorum" (The Extremes of Good and
                        Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section
                        1.10.32
                    </p>
                    <h2 className="pt-8 pb-1 font-bold text-lg">
                        Na czym polega proces tłoczenia soków?
                    </h2>
                    <div className="h-[1px] bg-green-600 w-[15%] mr-auto mb-10" />
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature
                    </p>
                    <h2 className="pt-8 pb-1 font-bold text-lg">
                        Tłoczenie soków a wartości odżywcze soku
                    </h2>
                    <div className="h-[1px] bg-green-600 w-[15%] mr-auto mb-10" />
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical
                        literature
                    </p>
                </div>

                <div className="max-w-7xl mx-auto py-4 lg:py-20">
                    <Slider
                        className=" text-center max-w-screen-2xl mx-auto w-[140%] md:w-full"
                        {...settingsCircle}
                    >
                        {data.allDatoCmsProjekty.edges.map(({ node }) => (
                            <Link
                                onClick={handleLinkClick}
                                to={"/" + node.slug}
                                draggable="false"
                                className=" lg:hover:bg-[#f3f0f0ee] transition-colors hover:shadow-xl py-4 w-[80%]"
                            >
                                <GatsbyImage
                                    loading="eager"
                                    image={getImage(node.img)}
                                    alt="lancuckie sady"
                                />
                                <div className="flex items-center justify-between py-2 px-6">
                                    <p className="font-medium">{node.title}</p>
                                    <p className="font-medium text-red-600">
                                        {node.price}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
                {/* 
                <section className="max-w-screen-xl mx-auto pt-6">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2">
                            <StaticImage quality={100} src="../images/x1.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2 lg:order-1">
                            <StaticImage quality={100} src="../images/x2.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="lg:w-1/2">
                            <StaticImage quality={100} src="../images/x3.jpg" />
                        </div>
                        <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                            <h2 className="text-lg font-bold pb-2">
                                Why do we use it?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo title="Seovileo" description="Przygotuj się na prawdziwą rewolucję" />
);
