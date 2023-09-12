import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Spinner from "../components/Spinner";

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
                <Link to="/">Start</Link>
                <span className="mx-2">&#8226;</span>
                <Link to="/hugo-boss">Hugo Boss</Link>
                <span className="mx-2">&#8226;</span>
                <p>{datoCmsHugoBoss.title}</p>
            </nav>
            <div className="flex flex-col lg:flex-row items-start justify-center wrapper">
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
                    <h1 className="text-2xl font-semibold capitalize">
                        {datoCmsHugoBoss.title}
                    </h1>
                    <p className="text-red-700 font-bold text-xl mt-2">
                        {datoCmsHugoBoss.price}
                    </p>
                    <p>Brutto</p>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <p>{datoCmsHugoBoss.desc}</p>
                    <div className="my-8 h-[1px] w-full bg-slate-200" />
                    <div className="mt-4 flex items-center justify-center">
                        <Link
                            to="/kontakt"
                            className={`mr-4 py-3 px-6 text-white text-sm hover:opacity-70 transition-opacity rounded-lg`}
                        >
                            Kontakt
                        </Link>
                        <Link
                            to="/"
                            target="_blank"
                            className="flex items-center justify-center mr-4 py-3 px-6 border text-black border-gray-600 hover:border-gray-300 transition-colors text-sm rounded-lg"
                        >
                            <p>Zobacz Live</p>
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
                            Szczegóły strony
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
                    Więcej Projektów:
                </h2>

                <div className="flex flex-wrap ">
                    {allDatoCmsHugoBoss.edges.map(({ node }) => (
                        <Link
                            to={"/" + node.slug}
                            className="py-3 px-1 group hover:bg-blue-50 rounded-lg transition-colors "
                        >
                            <GatsbyImage
                                image={getImage(node.img)}
                                alt="seovileo"
                                className="lg:group-hover:scale-105 lg:transition-transform lg:duration-300"
                            />
                            <div className="flex items-center justify-center text-center mx-auto w-full">
                                <p className="font-semibold text-sm capitalize group-hover:text-yellow-600 transition-colors">
                                    {node.title}
                                </p>
                            </div>
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
                gatsbyImageData(width: 150, placeholder: NONE, aspectRatio: 0.8)
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
