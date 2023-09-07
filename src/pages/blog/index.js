import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import SmallHero from "../../components/SmallHero";
import Spinner from "../../components/Spinner";

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
            <p className="font-bold text-lg -tracking-wide max-w-screen-xl mx-auto px-2 -mt-6">
                Nowości:
            </p>
            <div className="w-full h-[1px] mt-3 mb-4 bg-gray-300 max-w-screen-xl mx-auto" />
            <div className="flex flex-col lg:flex-row items-start justify-start max-w-screen-xl mx-auto">
                <div className="flex flex-col items-start justify-start w-full lg:w-3/4">
                    <div className="flex flex-wrap ">
                        {data.allDatoCmsBlog.edges
                            .slice(0, 4)
                            .map(({ node }) => (
                                <div className="lg:w-1/4 sm:w-1/2 flex items-stretch justify-center mb-8 lg:mb-10  ">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="flex flex-col items-center justify-start lg:mr-3 group relative p-2 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
                                    >
                                        <div className=" overflow-hidden rounded-lg shadow-lg hover:shadow-none mb-1 relative">
                                            <GatsbyImage
                                                loading="lazy"
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
                    <p className="font-bold -tracking-wide px-2 -mt-6">
                        Pozostałe:
                    </p>
                    <div className="w-full h-[1px] mt-3 mb-2 bg-gray-300 max-w-screen-xl mx-auto" />
                    <div className="flex flex-wrap w-full ">
                        {data.allDatoCmsBlog.edges
                            .slice(10)
                            .map(({ node }) => (
                                <div className="w-1/4 flex items-stretch justify-center mb-2  ">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="flex flex-col items-center justify-start mr-3 group relative p-2 rounded-lg hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
                                    >
                                        <div className=" overflow-hidden rounded-lg shadow-lg hover:shadow-none mb-1 relative">
                                            <GatsbyImage
                                                loading="lazy"
                                                image={getImage(node.img)}
                                                alt={node.title}
                                                onLoad={handleImageLoaded}
                                            />
                                            {!imageLoaded && <Spinner />}
                                        </div>

                                        <div className="flex flex-col gap-1 mx-2">
                                            <h2 className="text-gray-800 w-full md:w-[90%] text-base -tracking-wide font-bold">
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
                    {data.allDatoCmsBlog.edges.slice(4, 10).map(({ node }) => (
                        <Link
                            to={`/blog/` + node.slug}
                            className="flex group rounded-lg items-start gap-4 lg:gap-6 mb-2 hover:bg-white transition-colors p-2"
                        >
                            <div className=" overflow-hidden h-16 w-28 rounded-lg relative">
                                <GatsbyImage
                                    className="absolute inset-0 group-hover:scale-110 h-full w-full object-cover transition-transform duration-300"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                    onLoad={handleImageLoaded}
                                />
                                {!imageLoaded && <Spinner />}
                            </div>

                            <div className="flex flex-col gap-2 w-3/4">
                                <h2 className="text-gray-800 w-full text-sm font-bold">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="hoverLink active:text-gray-900 transition duration-100"
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
