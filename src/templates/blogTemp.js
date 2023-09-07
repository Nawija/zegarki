import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Spinner from "../components/Spinner";
import SmallHero from "../components/SmallHero";

import { BiShareAlt } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";

import "../styles/template.css";

const BlogTemplate = ({
    pageContext: { slug },
    data: { datoCmsBlog, allDatoCmsBlog },
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    return (
        <Layout>
            <SmallHero
                title="Udostępnij"
                smallHeroSlug1="blog"
                smallHeroSlug2={datoCmsBlog.slug}
            />
            <div className="flex items-start justify-center max-w-screen-xl mx-auto py-6 sm:py-8 lg:py-12">
                <div class=" flex items-start justify-start lg:w-3/4">
                    <div class="mx-auto max-w-screen-md px-4 md:px-8">
                        <h1 class=" text-center lg:text-start text-2xl font-bold text-main sm:text-3xl lg:text-4xl mb-4 md:mb-8 ">
                            {datoCmsBlog.seo.title}
                        </h1>

                        <div>
                            <GatsbyImage
                                className="h-full w-full rounded-lg mb-2"
                                loading="eager"
                                image={getImage(datoCmsBlog.img)}
                                alt={datoCmsBlog.seo.title}
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>

                        {/* <p class="mb-6 text-gray-700 sm:text-lg md:mb-8">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated. It may be used to display a
                            sample of fonts or generate text for testing. Filler
                            text is dummy text which has no meaning however
                            looks very similar to real text. The important
                            factor when using filler text is that the text looks
                            realistic otherwise it will not look very good.
                            <br />
                            <br />
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is{" "}
                            <a
                                href="#"
                                class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                            >
                                random
                            </a>{" "}
                            or otherwise generated. It may be used to display a
                            sample of fonts or generate text for testing. Filler
                            text is dummy text which has no meaning however
                            looks very similar to real text.
                        </p>

                        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
                            About us
                        </h2>

                        <p class="mb-6 text-gray-700 sm:text-lg md:mb-8">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated. It may be used to display a
                            sample of fonts or generate text for testing. Filler
                            text is dummy text which has no meaning however
                            looks very similar to real text.
                        </p>

                        <ul class="mb-6 list-inside list-disc text-gray-700 sm:text-lg md:mb-8">
                            <li>
                                This is a section of some simple filler text
                            </li>
                            <li>Also known as placeholder text</li>
                            <li>
                                It shares some characteristics of a real written
                                text
                            </li>
                        </ul>

                        <blockquote class="mb-6 border-l-4 pl-4 italic text-gray-700 sm:text-lg md:mb-8 md:pl-6">
                            “This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.”
                        </blockquote>

                        <div class="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
                            <img
                                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350"
                                loading="lazy"
                                alt="Photo by Minh Pham"
                                class="h-full w-full object-cover object-center"
                            />
                        </div>

                        <h2 class="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
                            Features
                        </h2>

                        <p class="text-gray-700 sm:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated. It may be used to display a
                            sample of fonts or generate text for testing. Filler
                            text is dummy text which has no meaning however
                            looks very similar to real text.
                        </p> */}
                        <div
                            id="descHtml"
                            dangerouslySetInnerHTML={{
                                __html: datoCmsBlog.desc,
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/3">
                    <div className="bg-blue-50 rounded-lg p-4">
                        <p className="font-bold text-base tracking-wide px-2">
                            Sprawdź:
                        </p>
                        <div className="w-full h-[1px] mt-1 mb-5 mx-2 bg-blue-300" />
                        {allDatoCmsBlog.edges.slice(4, 10).map(({ node }) => (
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
                    <div className="bg-gray-50 rounded-lg p-4 mt-4">
                        <p className="font-bold text-base tracking-wide px-2">
                            Udostępnij:
                        </p>
                        <div className="w-full h-[1px] mt-1 mb-5 mx-2 bg-orange-300" />
                        <div className="flex items-center justify-start ml-4 space-x-2">
                            <Link
                                to="/"
                                className="bg-gradient-to-tr from-pink-600 to-orange-400 p-1.5 rounded-full"
                            >
                                <BiShareAlt className="text-2xl text-white" />
                            </Link>
                            <Link
                                to="/"
                                className="bg-gradient-to-tr from-blue-600 to-blue-400 p-1.5 rounded-full"
                            >
                                <FaFacebook className="text-2xl text-white" />
                            </Link>
                            <Link
                                to="/"
                                className="bg-gradient-to-tr from-pink-600 to-yellow-400 p-1.5 rounded-full"
                            >
                                <PiInstagramLogoFill className="text-2xl text-white" />
                            </Link>
                            <Link
                                to="/"
                                className="bg-black p-1.5 rounded-full"
                            >
                                <BsGithub className="text-2xl text-white" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsBlog } }) => (
    <Seo
        title={datoCmsBlog.seo.title}
        description={datoCmsBlog.seo.description}
    />
);

export default BlogTemplate;

export const query = graphql`
    query ($slug: String) {
        datoCmsBlog(slug: { eq: $slug }) {
            slug
            title
            desc
            img {
                gatsbyImageData(placeholder: NONE, height: 678)
            }
            seo {
                description
                title
            }
        }
        allDatoCmsBlog(sort: { position: ASC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(height: 230, width: 230)
                    }
                    slug
                    seo {
                        description
                        title
                    }
                }
            }
        }
    }
`;
