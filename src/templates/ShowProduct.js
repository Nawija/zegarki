import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Spinner from "../components/Spinner";
import ShortText from "../components/ShortText";

const ShowProduct = ({
    pageContext: { slug },
    data: { datoCmsHugoBoss, allDatoCmsHugoBoss },
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <Layout>
            <nav className="text-[13px] flex-s wrapper font-medium">
                <Link to="/" className="p-2">
                    Start
                </Link>
                <span className="py-2">&#8226;</span>
                <Link to="/hugo-boss" className="p-2">
                    Hugo Boss
                </Link>
                <span className="py-2">&#8226;</span>
                <p className="p-2">{datoCmsHugoBoss.title}</p>
            </nav>

            <div className="flex flex-col lg:flex-row items-start justify-center wrapper pt-28">
                <div className="flex flex-col items-center justify-center w-full mx-auto md:w-64 lg:w-1/2 relative">
                    <GatsbyImage
                        loading="eager"
                        image={getImage(datoCmsHugoBoss.img)}
                        alt="seovileo"
                        title="seovileo"
                        onLoad={handleImageLoaded}
                    />
                    {!imageLoaded && <Spinner />}
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-1/2 lg:ml-12 px-6 lg:px-0 pt-5 lg:pt-2">
                    <h1 className="text-3xl font-semibold">
                        {datoCmsHugoBoss.title}
                    </h1>
                    <div className="flex items-center justify-center mt-2">
                        <p className="text-red-700 font-bold text-xl mr-2">
                            {datoCmsHugoBoss.price} zł
                        </p>
                        <p className="text-gray-400">/ brutto</p>
                    </div>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <div className="flex flex-wrap">
                        {allDatoCmsHugoBoss.edges.map(({ node }) => (
                            <Link
                                to={"/" + node.slug}
                                className="p-2 hover:bg-gray-100 transition-colors flex items-center justify-start flex-col w-20 border mr-2"
                            >
                                <GatsbyImage
                                    image={getImage(node.img)}
                                    alt="seovileo"
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <ShortText text={datoCmsHugoBoss.desc} />
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <div className="mt-4 flex items-center justify-center">
                        <Link
                            to="/kontakt"
                            className={`mr-4 py-3 px-6 text-white bg-red-700 text-sm hover:opacity-70 transition-opacity rounded-lg`}
                        >
                            Do Koszyka
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="flex items-center justify-center mr-4 py-3 px-6 border text-white bg-black border-gray-600 hover:border-gray-300 transition-colors text-sm rounded-lg"
                        >
                            <p>Kup Teraz</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between my-4 lg:my-10 max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-5 lg:px-0">
                    <div className="flex flex-col items-start justify-start w-full mt-6">
                        <p className="font-semibold text-lg">Opis</p>
                        <div className="h-[2px] w-10 mt-1 mb-3" />
                        <p>{datoCmsHugoBoss.desc}</p>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start w-full lg:w-1/3 pt-2">
                    <div className="flex flex-col items-start justify-start w-full mt-6 border p-6 relative rounded-lg">
                        <p className="text-lg font-semibold -tracking-wide">
                            Specyfikacja
                        </p>
                        <div className="h-[2px] w-10 mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Technologia</p>
                            <p>GatsbyJS</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">
                                Certyfikat SSL
                            </p>
                            <p>Tak</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Hosting</p>
                            <p>Darmowy</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Link</p>
                            <p>xxx</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />

                        <p className="text-lg font-semibold -tracking-wide">
                            Funkcjonalność
                        </p>
                        <div className="h-[2px] w-10 mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">
                                Wartość energetyczna
                            </p>
                            <p>190 kJ / 45 kcal</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Tłuszcz</p>
                            <p>0g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">
                                - w tym kwasy tłuszczowe <br />
                                nasycone
                            </p>
                            <p>0g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />

                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Węglowodany</p>
                            <p>11g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">- w tym cukry</p>
                            <p>11g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Białko</p>
                            <p>\/ 0.5 g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                        <div className="flex items-center justify-between w-full">
                            <p className="font-medium text-sm">Sól</p>
                            <p>\/ 0.01 g</p>
                        </div>
                        <div className="h-[1px] bg-white w-full mt-1 mb-3" />
                    </div>
                </div>
            </div>

            <div className="sm:my-6 lg:my-20 max-w-screen-xl mx-auto px-1">
                <h2 className="ml-8 font-semibold mb-3 text-lg">
                    Proponowane:
                </h2>

                <div className="flex flex-wrap">
                    {allDatoCmsHugoBoss.edges.map(({ node }) => (
                        <Link
                            to={"/" + node.slug}
                            className="py-3 px-1 group hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-start flex-col"
                        >
                            <GatsbyImage
                                image={getImage(node.img)}
                                alt="seovileo"
                                className="lg:group-hover:scale-105 lg:transition-transform lg:duration-300"
                            />

                            <p className="font-semibold text-sm capitalize group-hover:text-yellow-600 transition-colors w-44">
                                {node.title}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsHugoBoss } }) => (
    <Seo title={datoCmsHugoBoss.title} />
);

export default ShowProduct;

export const query = graphql`
    query ($slug: String) {
        datoCmsHugoBoss(slug: { eq: $slug }) {
            id
            title
            price
            desc
            slug
            img {
                gatsbyImageData(width: 350, placeholder: NONE, aspectRatio: 0.8)
            }
        }

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
`;
