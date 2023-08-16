import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsSlajdy {
                edges {
                    node {
                        img {
                            gatsbyImageData(width: 1500, height: 500)
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
                            gatsbyImageData(height: 100)
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
            <Layout>
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

                <div className="max-w-7xl mx-auto py-4 lg:py-20">
                    <Slider
                        className=" text-center max-w-screen-2xl mx-auto w-[140%] md:w-full"
                        {...settingsCircle}
                    >
                        {data.allDatoCmsProjekty.edges.map(({ node }) => (
                            <Link
                                onClick={handleLinkClick}
                                to={"/" + node.slug}
                                className="shadow-xl py-4"
                            >

                                    <GatsbyImage
                                        loading="eager"
                                        draggable="false"
                                        image={getImage(node.img)}
                                        alt={
                                            node.title + "- projekt seovileo.pl"
                                        }
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
