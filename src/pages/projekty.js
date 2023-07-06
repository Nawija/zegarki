import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSecond from "../components/HeroSecond";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const ProjectsPage = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsUsluga(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            alt
                            gatsbyImageData(width: 52, placeholder: NONE)
                        }
                        desc
                        title
                        slug
                    }
                }
            }
            allDatoCmsProjekty(sort: { position: ASC }) {
                edges {
                    node {
                        data(locale: "pl", formatString: "DD.MM.YYYY")
                        desc
                        img {
                            gatsbyImageData(placeholder: NONE, height: 220)
                        }
                        link
                        title
                        sdesc
                        slug
                    }
                }
            }
        }
    `);
    const [navbar, setNavbar] = useState(false);
    const [itemsPosition, setItemsPosition] = useState(false);

    const changeBackground = () => {
        if (
            window.scrollY +
                document.getElementById("divFixed").offsetHeight -
                200 >=
            document.getElementById("wrapperFixed").offsetHeight
        ) {
            setNavbar(false);
        } else if (window.scrollY > 200) {
            setNavbar(true);
            setItemsPosition(true);
        } else {
            setNavbar(false);
            setItemsPosition(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);
    return (
        <Layout>
            <HeroSecond />
            <div className=" bg-white text-sm drop-shadow-lg">
                <div className="flex flex-wrap items-center justify-between max-w-screen-2xl mx-auto px-3 py-2">
                    <div>
                        <Link
                            to="/"
                            title="Strona Główna"
                            className="px-2 py-2"
                        >
                            Strona Główna
                        </Link>
                        <span>/</span>
                        <Link to="/" title="Projekty" className="px-2 py-2">
                            Projekty
                        </Link>
                    </div>
                    <div className="space-x-2 w-max py-2">
                        <Link to="https://www.facebook.com/seovileo">
                            <StaticImage
                                src="../images/socialMedia/faccebook.jpg"
                                height={30}
                                quality={100}
                                alt="facebook"
                                title="facebook"
                            />
                        </Link>
                        <Link to="https://www.instagram.com/seovileo">
                            <StaticImage
                                src="../images/socialMedia/instagram.jpg"
                                height={30}
                                quality={100}
                                alt="instagram"
                                title="instagram"
                            />
                        </Link>
                        <Link to="https://www.youtube.com/channel/UCi90pADNilmDQEDnH2DZDbA">
                            <StaticImage
                                src="../images/socialMedia/youtube.jpg"
                                height={30}
                                quality={100}
                                alt="youtube"
                                title="youtube"
                            />
                        </Link>
                        <Link to="https://github.com/Nawija">
                            <StaticImage
                                src="../images/socialMedia/github.jpg"
                                height={30}
                                quality={100}
                                alt="github"
                                title="github"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col
             lg:flex-row w-full z-10 mt-10 max-w-[1400px] mx-auto px-6 lg:mb-12"
            >
                <section class="container lg:order-1 px-4 space-y-10 mx-auto lg:w-4/5 xl:w-full">
                    {data.allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="border bg-white drop-shadow-xl flex items-stretch justify-start">
                            <GatsbyImage
                                className="w-max h-max object-cover object-center group-hover:scale-95 transition"
                                image={getImage(node.img)}
                                alt={node.title}
                                title={node.title}
                            />
                            <div className="mt-8 w-full px-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold">
                                        {node.title}
                                    </h2>
                                    <p>{node.data}</p>
                                </div>
                                <p className="text-gray-700">{node.sdesc}</p>
                                <div className="pb-4 pt-6 flex items-start text-center justify-start space-x-3">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[13px] font-medium  leading-none mt-1">Wydajność</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[13px] font-medium w-min leading-none mt-1">Ułatwienia Dostępu</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[13px] font-medium w-min leading-none mt-1">Sprawdzone
Metody</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[13px] font-medium leading-none mt-1">SEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/4 flex flex-col items-stretch justify-center border-l px-6 space-y-2">
                                <Link
                                    to="/"
                                    className="border border-yellow-500 text-[13px] font-semibold py-1 px-2 rounded-lg"
                                >
                                    Raport Google
                                </Link>
                                <Link
                                    to="/"
                                    className="border border-yellow-500 text-[13px] font-semibold py-1 px-2 rounded-lg"
                                >
                                    Szczegóły
                                </Link>
                                <Link
                                    to={node.link}
                                    target="_blank"
                                    className="border bg-black text-white text-[12px] font-semibold py-1 px-2 rounded-lg"
                                >
                                    Zobacz Live
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
                <section
                    id="wrapperFixed"
                    className={`flex justify-center lg:justify-start w-full lg:w-[24%] my-6 lg:my-0 ${
                        itemsPosition ? "items-end" : "items-start"
                    }`}
                >
                    <div
                        id="divFixed"
                        className={`${navbar ? "lg:fixed top-28" : ""}`}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2 mx-auto">
                            {data.allDatoCmsUsluga.edges.map(({ node }) => (
                                <Link
                                    to={`/projekty/` + node.slug}
                                    className="relative flex flex-col items-center bg-[#1f1f1f] justify-center group py-4 px-10 text-center drop-shadow-xl rounded-lg"
                                >
                                    <h2 className="text-gray-100 mb-2 text-sm">
                                        {node.title}
                                    </h2>
                                    <GatsbyImage
                                        image={getImage(node.img)}
                                        alt={node.title}
                                        title={node.title}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ProjectsPage;

export const Head = () => (
    <Seo
        title="Projektowanie i tworzenie stron internetowych | Strony www | CMS"
        description="Przygotuj się na prawdziwą rewolucję w świecie stron www. Usługi projektowania i tworzenia stron internetowych, które przynoszą prawdziwe rezultaty !!"
    />
);
