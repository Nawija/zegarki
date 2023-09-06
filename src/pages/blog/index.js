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
            <p className="font-bold text-lg tracking-wide max-w-screen-xl mx-auto px-2 -mt-6">
                Nowości:
            </p>
            <div className="w-full h-[1px] mt-3 mb-6 bg-gray-300 max-w-screen-xl mx-auto" />
            <div className="flex items-start justify-start max-w-screen-xl mx-auto">
                <div className="flex flex-wrap w-full sm:px-8 lg:px-0  lg:w-3/4 ">
                    {data.allDatoCmsBlog.edges.map(({ node }) => (
                        <div className="flex gap-3 flex-col items-start mb-10 w-1/4">
                            <Link
                                to={`/blog/` + node.slug}
                                className="group overflow-hidden rounded-lg shadow-lg relative mr-3"
                            >
                                <GatsbyImage
                                    className="group-hover:scale-110 transition-transform duration-300"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                    onLoad={handleImageLoaded}
                                />
                                {!imageLoaded && <Spinner />}
                            </Link>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-gray-800 w-full md:w-[90%] text-xl font-bold">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="hoverLink active:text-gray-900 transition duration-100"
                                    >
                                        {node.seo.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-500 w-full text-sm md:w-[90%]">
                                    {node.seo.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/4 ml-4 bg-blue-50 rounded-lg p-4">
                    <p className="font-bold text-base tracking-wide px-2">
                        Na Czasie:
                    </p>
                    <div className="w-full h-[1px] mt-1 mb-5 mx-2 bg-blue-300" />
                    {data.allDatoCmsBlog.edges.map(({ node }) => (
                        <div className="flex items-start gap-4 lg:gap-6 mb-6">
                            <Link
                                to={`/blog/` + node.slug}
                                className="group overflow-hidden h-20 w-20 rounded-lg relative"
                            >
                                <GatsbyImage
                                    className="absolute inset-0 group-hover:scale-110 h-full w-full object-cover transition-transform duration-300"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                    onLoad={handleImageLoaded}
                                />
                                {!imageLoaded && <Spinner />}
                            </Link>

                            <div className="flex flex-col gap-2 w-3/4">
                                <h2 className="text-gray-800 w-full text-base font-bold">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="hoverLink active:text-gray-900 transition duration-100"
                                    >
                                        {node.seo.title}
                                    </Link>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Blog | Seovileo" />;

export default BlogPage;
