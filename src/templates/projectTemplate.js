import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSecond from "../components/HeroSecond";

import "../styles/template.css";

import {
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    WhatsappIcon,
} from "react-share";

import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    WhatsappShareButton,
} from "react-share";

const ProjectTemplate = ({
    pageContext: { slug },
    data: { datoCmsProjekty, allDatoCmsProjekty },
}) => {
    return (
        <Layout>
            <HeroSecond titleHero={datoCmsProjekty.title} />
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
                        <span>/</span>
                        <Link
                            to={"/projekty/" + datoCmsProjekty.slug}
                            title={datoCmsProjekty.title}
                            className="px-2 py-2"
                        >
                            {datoCmsProjekty.title}
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
             lg:flex-row w-full z-10  max-w-[1400px] mx-auto lg:mb-12 pb-4 pt-2 lg:mt-10"
            >
                <section
                    className={`flex justify-center lg:justify-start w-full lg:w-[65%] my-6 lg:my-0 items-start`}
                >
                    <div className="flex flex-col items-center justify-center drop-shadow-lg">
                        <GatsbyImage
                            className="h-max"
                            imgClassName="h-max"
                            loading="eager"
                            image={getImage(datoCmsProjekty.img)}
                            alt={datoCmsProjekty.title}
                            title={datoCmsProjekty.title}
                        />
                        <div className="flex items-center border p-4 justify-end space-x-4 my-2 ml-auto pr-4">
                        <p>Udostepnij</p>
                            <div className=" space-x-4">
                                <FacebookShareButton
                                    url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                    quote={datoCmsProjekty.title}
                                    hashtag="#seovileo"
                                >
                                    <div className="w-6 h-6">
                                        <FacebookIcon size={33} round={true} />
                                    </div>
                                </FacebookShareButton>
                                <TwitterShareButton
                                    url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                    title={datoCmsProjekty.title}
                                    hashtags={[
                                        "seovileo",
                                        "strona internetowa",
                                    ]}
                                >
                                    <div className="w-6 h-6">
                                        <TwitterIcon size={33} round={true} />
                                    </div>
                                </TwitterShareButton>
                                <PinterestShareButton
                                    url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                    media={datoCmsProjekty.img.url}
                                    summary={datoCmsProjekty.title}
                                    source="Seovileo.pl"
                                >
                                    <div className="w-6 h-6">
                                        <PinterestIcon size={33} round={true} />
                                    </div>
                                </PinterestShareButton>
                                <WhatsappShareButton
                                    url={`https://seovileo.pl/${datoCmsProjekty.slug}`}
                                    title={datoCmsProjekty.title}
                                    summary={datoCmsProjekty.title}
                                    source="Seovileo.pl"
                                >
                                    <div className="w-6 h-6">
                                        <WhatsappIcon size={33} round={true} />
                                    </div>
                                </WhatsappShareButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="container order-1 px-4 space-y-10 mx-auto lg:w-4/5 xl:w-full">
                    <div className="border relative py-4 bg-white drop-shadow-xl flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start">
                        <div className="mt-8 w-full px-4 lg:px-12 flex lg:inline-block items-center justify-center flex-col">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <h2 className="text-3xl font-semibold">
                                    {datoCmsProjekty.title}
                                </h2>
                                <p className="text-gray-700 pb-3 lg:py-0">
                                    {datoCmsProjekty.data}
                                </p>
                            </div>
                            <div
                                id="descHtml"
                                dangerouslySetInnerHTML={{
                                    __html: datoCmsProjekty.desc,
                                }}
                            />

                            <div className="flex items-start text-center justify-start space-x-2 sm:space-x-3">
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
                            <div className="flex flex-wrap items-end pt-5 pb-6 lg:items-stretch justify-center lg:justify-start lg:px-0 px-6 space-x-2 space-y-2 lg:space-y-0">
                                <Link
                                    to="/projekty"
                                    target="_blank"
                                    title="Projekty"
                                    className="border border-yellow-500 hoverBorder flex items-center justify-between text-[14px] font-semibold py-1.5 px-2 rounded-lg"
                                >
                                    <p className="mr-1 w-max">Projekty</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                        <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                        <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                        <path d="M14 7l6 0"></path>
                                        <path d="M17 4l0 6"></path>
                                    </svg>
                                </Link>
                                <Link
                                    to={datoCmsProjekty.googlelink}
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
                                    to={datoCmsProjekty.link}
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
                            <div className="rounded-lg h-max mx-auto">
                                <p>
                                    Sprawdz nasza darmową wycene lub skontaktuj
                                    sie z nami bezposrednio
                                </p>
                                <div className="flex flex-wrap items-end pt-5 pb-6 lg:items-stretch justify-center lg:justify-start lg:px-0 px-6 space-x-2 space-y-2 lg:space-y-0">
                                    <Link
                                        to="/darmowa-wycena"
                                        target="_blank"
                                        title="Zobacz Raport Google"
                                        className="border border-yellow-500 bg-white hoverBorder flex items-center justify-between text-[14px] font-semibold py-1.5 px-2 rounded-lg"
                                    >
                                        <p className="mr-1 w-max">
                                            Darmowa Wycena
                                        </p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="icon icon-tabler icon-tabler-brand-wechat"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            ></path>
                                            <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z"></path>
                                            <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233"></path>
                                            <path d="M10 8h.01"></path>
                                            <path d="M7 8h.01"></path>
                                            <path d="M15 14h.01"></path>
                                            <path d="M18 14h.01"></path>
                                        </svg>
                                    </Link>
                                    <Link
                                        to="/kontakt"
                                        target="_blank"
                                        title="Zobacz na żywo"
                                        className="border bg-black text-white text-[13px] flex items-center justify-between font-semibold py-1.5 px-2 rounded-lg"
                                    >
                                        <p className="mr-1 w-max">Kontakt</p>
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
                        </div>
                    </div>
                </section>
            </div>

            <div className="flex flex-wrap items-center justify-center mx-auto max-w-[1400px]">
                {allDatoCmsProjekty.edges.map(({ node }) => (
                    <Link
                        to={`/projekty/` + node.slug}
                        className="flex flex-col bg-black rounded-lg drop-shadow-lg m-2"
                    >
                        <GatsbyImage
                            className="w-full rounded-lg h-auto"
                            image={getImage(node.img)}
                            alt={node.title}
                            title={node.title}
                        />

                        <h2 className="text-gray-100 text-sm py-1 flex items-center justify-center">
                            <span className="mr-1">{node.title}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                stroke-width="1.4"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                ></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M15 16l4 -4"></path>
                                <path d="M15 8l4 4"></path>
                            </svg>
                        </h2>
                    </Link>
                ))}
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsProjekty } }) => (
    <Seo
        title={
            datoCmsProjekty.title +
            " - Projekt Strony Internetowej | Seovileo.pl"
        }
        siteUrl={`https://seovileo.pl/` + datoCmsProjekty.slug}
    />
);

export default ProjectTemplate;

export const query = graphql`
    query ($slug: String) {
        datoCmsProjekty(slug: { eq: $slug }) {
            img {
                gatsbyImageData(placeholder: BLURRED, height: 550)
            }
            googlelink
            link
            data
            title
            desc
            slug
        }
        allDatoCmsProjekty(sort: { data: DESC }) {
            edges {
                node {
                    img {
                        gatsbyImageData(placeholder: NONE, height: 160)
                    }
                    title
                    slug
                }
            }
        }
    }
`;
