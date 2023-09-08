import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import SmallHero from "../../components/SmallHero";
import Spinner from "../../components/Spinner";

import { FaHotjar, FaBookOpenReader } from "react-icons/fa";

const BlogPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    const data = useStaticQuery(graphql`
        {
            allDatoCmsBlog(sort: { position: ASC }) {
                edges {
                    node {
                        date(formatString: "DD.MM.YY")
                        img {
                            gatsbyImageData(
                                height: 200
                                width: 300
                                placeholder: NONE
                            )
                        }
                        seo {
                            description
                            title
                        }
                        slug
                        title
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <SmallHero title="Blog" smallHeroSlug1="blog" />
            <div className="flex items-center justify-start max-w-screen-xl mx-auto px-2 mt-10">
                <p className="font-bold text-lg -tracking-wide ">
                    Nowości
                </p>
                <FaHotjar className="text-sm text-red-600 ml-2 mr-0.5" />
                <small className="text-[13px] text-red-600 font-semibold">Hot</small>
            </div>
            <div className="w-full h-[1px] mt-3 mb-4 bg-gray-300 max-w-screen-xl mx-auto" />
            <div className="flex flex-col lg:flex-row items-start justify-start max-w-screen-xl mx-auto">
                <div className="flex flex-col items-start justify-start w-full lg:w-3/4">
                    <div className="flex flex-wrap ">
                        {data.allDatoCmsBlog.edges
                            .slice(0, 6)
                            .map(({ node }) => (
                                <div className="lg:w-1/3 md:w-1/2 flex items-stretch justify-center  ">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="flex flex-col items-center justify-start group relative p-4 rounded-lg hover:bg-gray-100 transition-colors duration-100"
                                    >
                                        <div className=" relative overflow-hidden rounded-lg shadow-lg mb-1 w-full h-40">
                                            <GatsbyImage
                                                className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                                image={getImage(node.img)}
                                                alt={node.title}
                                                onLoad={handleImageLoaded}
                                            />
                                            {!imageLoaded && <Spinner />}
                                        </div>

                                        <div className="flex flex-col gap-1 w-3/4 lg:w-full mx-2">
                                            <h2 className="text-gray-800 w-full text-base -tracking-wide font-bold">
                                                {node.seo.title}
                                            </h2>

                                            <p className="text-gray-700 w-full text-sm">
                                                {node.seo.description}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                    </div>

                    <p className="font-bold -tracking-wide px-2 mt-6">
                        {/* <FaBookOpenReader className="text-2xl text-yellow-500" />  */}
                        Czytaj Więcej:
                    </p>
                    <div className="w-full h-[1px] mt-3 mb-2 bg-gray-300 mx-auto" />
                    <div className="flex flex-wrap ">
                        {data.allDatoCmsBlog.edges.slice(10).map(({ node }) => (
                            <div className="lg:w-1/4 sm:w-1/2 flex items-stretch justify-center mb-4  ">
                                <Link
                                    to={`/blog/` + node.slug}
                                    className="flex flex-col items-center justify-start group relative p-3 rounded-lg hover:bg-gray-100 transition-colors duration-100"
                                >
                                    <div className="overflow-hidden h-40 w-full rounded-lg shadow-lg mb-1 relative">
                                        <GatsbyImage
                                            loading="lazy"
                                            className="w-full h-full group-hover:scale-105 duration-500 transition-transform"
                                            image={getImage(node.img)}
                                            alt={node.title}
                                            onLoad={handleImageLoaded}
                                        />
                                        {!imageLoaded && <Spinner />}
                                    </div>

                                    <div className="flex flex-col gap-1 w-3/4 lg:w-full mx-2">
                                        <h2 className="text-gray-800 w-full text-base -tracking-wide font-bold">
                                            {node.seo.title}
                                        </h2>

                                        <p className="text-gray-700 w-full text-sm">
                                            {node.seo.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/4 ml-4 bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-base tracking-wide px-2">
                        Na Czasie:
                    </p>
                    <div className="w-full h-[1px] mt-1 mb-5 mx-2 bg-blue-300" />
                    {data.allDatoCmsBlog.edges.slice(6, 16).map(({ node }) => (
                        <Link
                            to={`/blog/` + node.slug}
                            className="flex group rounded-lg items-start gap-4 lg:gap-6 mb-2 hover:bg-white transition-colors p-2"
                        >
                            <div className=" overflow-hidden h-16 w-28 rounded-lg relative">
                                <GatsbyImage
                                    className="absolute inset-0 group-hover:scale-110 h-full w-full object-cover transition-transform duration-500"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                    onLoad={handleImageLoaded}
                                />
                                {!imageLoaded && <Spinner />}
                            </div>

                            <div className="flex flex-col w-4/5">
                                <h2 className="w-full text-sm font-bold">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="transition duration-100 relative"
                                    >
                                        {node.seo.title}
                                    </Link>
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Blog | Seovileo" />;

export default BlogPage;
