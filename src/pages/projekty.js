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
                            gatsbyImageData(placeholder: NONE, height: 160)
                        }
                        googlelink
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
        } else if (window.scrollY > 210) {
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
            <HeroSecond titleHero="Profesjonalne Usługi" />
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
                        <Link
                            to="/projekty"
                            title="Projekty"
                            className="px-2 py-2"
                        >
                            Projekty
                        </Link>
                    </div>
                    <div className="space-x-2 w-max py-2">
                        <Link
                            to="https://www.facebook.com/seovileo"
                            title="facebook"
                            target="_blank"
                        >
                            <StaticImage
                                src="../images/socialMedia/faccebook.jpg"
                                height={30}
                                quality={100}
                                alt="facebook"
                            />
                        </Link>
                        <Link
                            to="https://www.instagram.com/seovileo"
                            title="instagram"
                            target="_blank"
                        >
                            <StaticImage
                                src="../images/socialMedia/instagram.jpg"
                                height={30}
                                quality={100}
                                alt="instagram"
                            />
                        </Link>
                        <Link
                            to="https://www.youtube.com/channel/UCi90pADNilmDQEDnH2DZDbA"
                            title="youtube"
                            target="_blank"
                        >
                            <StaticImage
                                src="../images/socialMedia/youtube.jpg"
                                height={30}
                                quality={100}
                                alt="youtube"
                            />
                        </Link>
                        <Link
                            to="https://github.com/Nawija"
                            title="github"
                            target="_blank"
                        >
                            <StaticImage
                                src="../images/socialMedia/github.jpg"
                                height={30}
                                quality={100}
                                alt="github"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col
             lg:flex-row w-full z-10 mt-4 sm:mt-10 max-w-[1400px] mx-auto lg:mb-12"
            >
                <section class="container lg:order-1 px-4 space-y-10 mx-auto lg:w-4/5 xl:w-full">
                    {data.allDatoCmsProjekty.edges.map(({ node }) => (
                        <div className="border relative py-4 bg-white drop-shadow-xl flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start">
                            <div className="flex items-center justify-center">
                                <GatsbyImage
                                    className="h-max w-max"
                                    imgClassName="h-max w-max"
                                    image={getImage(node.img)}
                                    alt={node.title}
                                    title={node.title}
                                />
                            </div>
                            <div className="mt-8 w-full px-4 flex lg:inline-block items-center justify-center flex-col">
                                <div className="flex flex-col lg:flex-row items-center justify-between">
                                    <h2 className="text-lg font-semibold">
                                        {node.title}
                                    </h2>
                                    <p className="text-gray-700 pb-3 lg:py-0">
                                        {node.data}
                                    </p>
                                </div>
                                <p className="text-gray-700 text-center lg:text-start px-1">
                                    {node.sdesc}
                                </p>
                                <div className="pb-4 pt-6 flex items-start text-center justify-start space-x-2 sm:space-x-3">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex flex-wrap items-center justify-center">
                                            <p className="text-green-700 font-semibold cursor-default">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[12px] sm:text-[13px] font-medium  leading-none mt-1">
                                            Wydajność
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold cursor-default">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[12px] sm:text-[13px] font-medium w-min leading-none mt-1">
                                            Ułatwienia Dostępu
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold cursor-default">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[12px] sm:text-[13px] font-medium w-min leading-none mt-1">
                                            Sprawdzone Metody
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="h-12 w-12 bg-green-300/50 rounded-full border-4 border-green-500 flex items-center justify-center">
                                            <p className="text-green-700 font-semibold cursor-default">
                                                100
                                            </p>
                                        </div>
                                        <p className="text-[12px] sm:text-[13px] font-medium leading-none mt-1">
                                            SEO
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 flex flex-wrap lg:flex-col items-end pt-3 pb-6 lg:items-stretch justify-center lg:border-l px-6 space-x-2 lg:space-x-0 space-y-2">
                                <Link
                                    to={node.googlelink}
                                    target="_blank"
                                    title="Zobacz Raport Google"
                                    className="border border-yellow-500 hoverBorder flex items-center justify-between text-[14px] font-semibold py-1.5 px-2 rounded-lg"
                                >
                                    <p className="mr-1 w-max">Raport Google</p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1877_399)">
                                            <path
                                                d="M0 0H20V20H0V0Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.66683 4.16675H5.00016C4.55814 4.16675 4.13421 4.34234 3.82165 4.6549C3.50909 4.96746 3.3335 5.39139 3.3335 5.83341V15.8334C3.3335 16.2754 3.50909 16.6994 3.82165 17.0119C4.13421 17.3245 4.55814 17.5001 5.00016 17.5001H9.74766"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.66683 4.16675H5.00016C4.55814 4.16675 4.13421 4.34234 3.82165 4.6549C3.50909 4.96746 3.3335 5.39139 3.3335 5.83341V15.8334C3.3335 16.2754 3.50909 16.6994 3.82165 17.0119C4.13421 17.3245 4.55814 17.5001 5.00016 17.5001H9.74766"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14.9998 10.0001V5.83341C14.9998 5.39139 14.8242 4.96746 14.5117 4.6549C14.1991 4.34234 13.7752 4.16675 13.3332 4.16675H11.6665"
                                                fill="white"
                                            />
                                            <path
                                                d="M14.9998 10.0001V5.83341C14.9998 5.39139 14.8242 4.96746 14.5117 4.6549C14.1991 4.34234 13.7752 4.16675 13.3332 4.16675H11.6665"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6.6665 4.16667C6.6665 3.72464 6.8421 3.30072 7.15466 2.98816C7.46722 2.67559 7.89114 2.5 8.33317 2.5H9.99984C10.4419 2.5 10.8658 2.67559 11.1783 2.98816C11.4909 3.30072 11.6665 3.72464 11.6665 4.16667C11.6665 4.60869 11.4909 5.03262 11.1783 5.34518C10.8658 5.65774 10.4419 5.83333 9.99984 5.83333H8.33317C7.89114 5.83333 7.46722 5.65774 7.15466 5.34518C6.8421 5.03262 6.6665 4.60869 6.6665 4.16667Z"
                                                fill="white"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6.6665 9.16675H9.99984H6.6665Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.6665 9.16675H9.99984"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M6.6665 12.5H9.1665H6.6665Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M6.6665 12.5H9.1665"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M11.6665 14.5833C11.6665 15.1359 11.886 15.6658 12.2767 16.0565C12.6674 16.4472 13.1973 16.6667 13.7498 16.6667C14.3024 16.6667 14.8323 16.4472 15.223 16.0565C15.6137 15.6658 15.8332 15.1359 15.8332 14.5833C15.8332 14.0308 15.6137 13.5009 15.223 13.1102C14.8323 12.7195 14.3024 12.5 13.7498 12.5C13.1973 12.5 12.6674 12.7195 12.2767 13.1102C11.886 13.5009 11.6665 14.0308 11.6665 14.5833Z"
                                                fill="white"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M15.4165 16.25L17.4998 18.3333L15.4165 16.25Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M15.4165 16.25L17.4998 18.3333"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1877_399">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link
                                    to={"/projekty/" + node.slug}
                                    title="Więcej Szczegółów"
                                    className="border border-yellow-500 hoverBorder text-[14px] flex items-center justify-between font-semibold py-1.5 px-2 rounded-lg"
                                >
                                    <p className="mr-1 w-max">Szczegóły</p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1877_391)">
                                            <path
                                                d="M16.5625 5.22498C17.1458 5.55665 17.5042 6.17748 17.5 6.84832V12.9183C17.5 13.5925 17.1308 14.2142 16.535 14.5417L10.91 18.1C10.6311 18.2531 10.3181 18.3334 10 18.3334C9.68186 18.3334 9.36887 18.2531 9.09 18.1L3.465 14.5417C3.17347 14.3823 2.9301 14.1476 2.76034 13.862C2.59058 13.5765 2.50067 13.2505 2.5 12.9183V6.84748C2.5 6.17332 2.86917 5.55248 3.465 5.22498L9.09 1.90832C9.37711 1.75001 9.69964 1.66699 10.0275 1.66699C10.3554 1.66699 10.6779 1.75001 10.965 1.90832L16.59 5.22498H16.5625Z"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10 7.5H10.0083"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M9.1665 10H9.99984V13.3333H10.8332"
                                                stroke="#353535"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1877_391">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                                <Link
                                    to={node.link}
                                    target="_blank"
                                    title="Zobacz na żywo"
                                    className="border bg-black text-white text-[13px] flex items-center justify-between font-semibold py-1.5 px-2 rounded-lg"
                                >
                                    <p className="mr-1 w-max">Zobacz Live</p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1882_504)">
                                            <path
                                                d="M8.3335 9.99992C8.3335 10.4419 8.50909 10.8659 8.82165 11.1784C9.13421 11.491 9.55814 11.6666 10.0002 11.6666C10.4422 11.6666 10.8661 11.491 11.1787 11.1784C11.4912 10.8659 11.6668 10.4419 11.6668 9.99992C11.6668 9.55789 11.4912 9.13397 11.1787 8.82141C10.8661 8.50885 10.4422 8.33325 10.0002 8.33325C9.55814 8.33325 9.13421 8.50885 8.82165 8.82141C8.50909 9.13397 8.3335 9.55789 8.3335 9.99992Z"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M9.28583 14.9675C6.60167 14.7217 4.33917 13.0667 2.5 10C4.5 6.66667 7 5 10 5C13 5 15.5 6.66667 17.5 10C17.315 10.3083 17.1258 10.6017 16.9333 10.8808"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M12.5 15.8334L14.1667 17.5001L17.5 14.1667"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1882_504">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
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
                        className={`${navbar ? "lg:fixed top-[6.5rem]" : ""}`}
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-2 sm:gap-6 md:gap-2 mx-auto px-2">
                            {data.allDatoCmsUsluga.edges.map(({ node }) => (
                                <Link
                                    to={`/projekty/` + node.slug}
                                    title={node.title}
                                    className="relative lg:hover:bg-black transition-colors flex flex-col items-center bg-[#1f1f1f] justify-center group py-4 px-10 text-center drop-shadow-xl rounded-lg"
                                >
                                    <h2 className="text-gray-100 mb-2 text-sm">
                                        {node.title}
                                    </h2>
                                    <GatsbyImage
                                        image={getImage(node.img)}
                                        alt={node.title}
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
