import React, { useState } from "react";
import { CiShare1 } from "react-icons/ci";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";
import Spinner from "../components/Spinner";

import "../styles/template.css";

const ProjectTemplate = ({
    pageContext: { slug },
    data: { datoCmsProjekty, allDatoCmsProjekty },
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    return (
        <Layout>
            <TopImg headh1={"Projekt " + datoCmsProjekty.title} />
            <div className="flex flex-col lg:flex-row items-start justify-center my-4 lg:my-10 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center w-52 mx-auto -mt-16 md:w-64 lg:mt-0 lg:w-1/2 relative">
                    <GatsbyImage
                        loading="eager"
                        image={getImage(datoCmsProjekty.img)}
                        alt="łancuckie sady"
                        title="łancuckie sady"
                        onLoad={handleImageLoaded}
                    />
                    {!imageLoaded && <Spinner />}
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-1/2 lg:ml-12 px-6 lg:px-0 pt-5 lg:pt-2">
                    <h1 className="text-2xl font-semibold capitalize">
                        {datoCmsProjekty.title}
                    </h1>
                    <p className="text-[#DD0000] font-bold text-xl mt-2">
                        {datoCmsProjekty.price}
                    </p>
                    <p>Brutto</p>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <p>{datoCmsProjekty.sdesc}</p>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <div className="mt-4 flex items-center justify-center">
                        <Link
                            to="/kontakt"
                            className="mr-4 py-3 px-6 bg-[#C20404] transition-colors hover:bg-[#9d2b2b] text-white text-sm"
                        >
                            Kontakt
                        </Link>
                        <Link
                            to={datoCmsProjekty.link}
                            target="_blank"
                            className="flex items-center justify-center mr-4 py-3 px-6 border text-black border-gray-600 hover:border-gray-300 transition-colors text-sm"
                        >
                            <CiShare1 className="mr-2 scale-110" />
                            <p>Zobacz Live</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between my-4 lg:my-10 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-5 lg:px-0">
                    <div className="flex flex-col items-start justify-start w-full mt-6">
                        <p className="font-semibold text-lg">Opis</p>
                        <div className="h-[2px] bg-red-600 w-10 mt-1 mb-3" />
                        <p>{datoCmsProjekty.desc}</p>
                        <div className="mt-6 flex flex-col lg:flex-row items-center justify-center">
                            <StaticImage
                                quality={100}
                                src="../images/uiux.jpg"
                            />

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-1/3 pt-2">
                    <div className="flex flex-col items-start justify-start w-full mt-6 bg-[#ECECEC] p-6">
                        <p className="text-lg font-semibold -tracking-wide">
                            Szczegóły produktu
                        </p>
                        <div className="h-[2px] bg-red-600 w-10 mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Smak</p>
                            <p>Jabłkowy</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Pojemność</p>
                            <p>330ml</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />

                        <p className="text-lg font-semibold -tracking-wide">
                            Wartość odżywcza w 100 ml
                        </p>
                        <div className="h-[2px] bg-red-600 w-10 mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">
                                Wartość energetyczna
                            </p>
                            <p>190 kJ / 45 kcal</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Tłuszcz</p>
                            <p>0g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">
                                - w tym kwasy tłuszczowe <br />
                                nasycone
                            </p>
                            <p>0g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Węglowodany</p>
                            <p>11g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">- w tym cukry</p>
                            <p>11g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Białko</p>
                            <p>\/ 0.5 g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Sól</p>
                            <p>\/ 0.01 g</p>
                        </div>
                        <div className="h-[1px] bg-gray-300 w-full mt-1 mb-3" />
                    </div>
                </div>
            </div>

            <div className="sm:my-6 lg:my-20 max-w-screen-xl mx-auto px-1">
                <h2 className="ml-8 font-medium mb-3">Więcej Projektów:</h2>
                <div className="flex flex-wrap ">
                    {allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="relative mx-auto">
                            <Link to={"/" + node.slug} className="py-4">
                                <GatsbyImage
                                    image={getImage(node.img)}
                                    alt="lancuckie sady"
                                />
                                <div className="flex items-center justify-between py-2">
                                    <p className="font-medium text-sm capitalize">
                                        {node.title}
                                    </p>
                                    <p className="font-medium text-sm text-red-600">
                                        {node.price}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsProjekty } }) => (
    <Seo title={datoCmsProjekty.title + " - Seovileo"} />
);

export default ProjectTemplate;

export const query = graphql`
    query ($slug: String) {
        datoCmsProjekty(slug: { eq: $slug }) {
            title
            sdesc
            desc
            link
            img {
                gatsbyImageData(height: 550, placeholder: NONE)
            }
        }
        allDatoCmsProjekty(sort: { position: ASC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(height: 120)
                    }
                    slug
                    title
                }
            }
        }
    }
`;
