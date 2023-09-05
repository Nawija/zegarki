import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

import Spinner from "../components/Spinner";

import Hero from "../components/Hero";

import { FaCrown } from "react-icons/fa";

const IndexPage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
    const data = useStaticQuery(graphql`
        {
            allDatoCmsProjekty {
                edges {
                    node {
                        data(formatString: "DD/MM/YY", locale: "PL")
                        slug
                        title
                        sdesc
                        price
                        img {
                            colors {
                                hex
                            }
                            gatsbyImageData(
                                placeholder: NONE
                                height: 250
                                width: 250
                            )
                        }
                    }
                }
            }

            allDatoCmsBlog(sort: { position: ASC }, limit: 4) {
                edges {
                    node {
                        img {
                            colors {
                                hex
                            }
                            gatsbyImageData(placeholder: NONE, height: 300)
                        }
                        slug
                        title
                        seo {
                            description
                            title
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <Hero />
            <div className="bg-gradient-to-b from-blue-300 to-blue-100 p-4 w-full relative flex items-center justify-center">
                <p className="font-semibold mr-5 text-sm md:text-base">
                    Poznaj rewolucję, inspiracja na wyciągnięcie ręki
                </p>
                <Link
                    to="/premium-gatsbyjs"
                    className="flex items-center justify-center p-3 bg-gradient-to-tr from-yellow-500/90 to-yellow-600 font-bold text-white text-sm tracking-wide rounded-lg"
                >
                    <p className="lg:mr-1">Wybierz Premium</p>
                    <div>
                        <FaCrown className="text-xl" />
                    </div>
                </Link>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-20">
                        <h2 className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl">
                            Nasze Projekty
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center space-x-6">
                        {data.allDatoCmsProjekty.edges.map(({ node }) => (
                            <div className="mb-4">
                                <Link className="relative group" to={node.slug}>
                                    <p className="text-black text-sm font-bold tracking-wide absolute top-[8%] w-max left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-[200%] transition-transform duration-500">
                                        {node.title}
                                    </p>
                                    <div className="relative mb-4 block w-auto overflow-hidden rounded-lg lg:mb-5">
                                        <GatsbyImage
                                            className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-110 z-10"
                                            loading="lazy"
                                            image={getImage(node.img)}
                                            alt="seovileo"
                                            onLoad={handleImageLoaded}
                                        />
                                        {!imageLoaded && <Spinner />}
                                        <div className="absolute top-0 left-0 h-2/5 w-full ">
                                            <div
                                                className={`absolute top-0 left-0 h-full w-full opacity-20 rounded-b-lg blur-lg`}
                                                style={{
                                                    background: `linear-gradient(60deg, ${node.img.colors[4].hex} 0%, ${node.img.colors[0].hex} 100%)`,
                                                }}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between px-3">
                                            <small className="font-semibold">
                                                {node.data}
                                            </small>
                                            <div
                                                className={`opacity-80 border rounded-lg text-[12px] text-white font-bold px-2.5 py-1`}
                                                style={{
                                                    background: `linear-gradient(60deg, ${node.img.colors[4].hex} 0%, ${node.img.colors[0].hex} 100%)`,
                                                }}
                                            >
                                                <small>Zobacz</small>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <Link to="/" className="btn-main w-max mx-auto mt-4">
                        Więcej Projektów
                    </Link>
                </div>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-16">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-amber-300 to-amber-600 sm:flex-row md:h-80">
                        <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
                            <h2 className="mb-4 text-xl font-bold  md:text-2xl lg:text-4xl">
                                Promocja
                                <br />
                                Do nawet -50%
                            </h2>

                            <p className="mb-8 max-w-md text-gray-700">
                                This is a section of some simple filler text,
                                also known as placeholder text. It shares some
                                characteristics of a real written text.
                            </p>

                            <div className="mt-auto">
                                <a
                                    href="#"
                                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold  outline-none ring-blue-400 transition hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                                >
                                    Zamów Teraz
                                </a>
                            </div>
                        </div>

                        <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5 rounded-lg overflow-hidden">
                            <img
                                src="https://img.freepik.com/darmowe-zdjecie/renderowanie-3d-na-koncepcji-hostingu-strony-internetowej_23-2149484780.jpg?w=1480&t=st=1693654121~exp=1693654721~hmac=387f66bad037f860bd26aa3a61ee3fcf3cd31f7d0c74551fef45f189d0f5642f"
                                loading="lazy"
                                alt="Photo by Dom Hill"
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-20">
                        <h2 className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl">
                            Gotowe Szablony Stron
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        <div>
                            <a
                                href="#"
                                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4"
                            >
                                <img
                                    src="https://img.freepik.com/darmowe-wektory/streszczenie-projektu-strony-docelowej-szablon-strony-internetowej-lub-aplikacji-kolorowy-streszczenie-fala-minimalna_1217-4796.jpg?w=2000&t=st=1693583391~exp=1693583991~hmac=0205cc795e024853a4d5c0f6054d3ad94b83726aea905de1f428b10087bcebb6"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-700">Men</span>
                                    <span className="text-lg font-bold  lg:text-xl">
                                        Business Causual
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by engin akyurt"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-700">Women</span>
                                    <span className="text-lg font-bold  lg:text-xl">
                                        Summer Season
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-700">Men</span>
                                    <span className="text-lg font-bold  lg:text-xl">
                                        Streetwear
                                    </span>
                                </div>
                            </a>
                        </div>

                        <div>
                            <a
                                href="#"
                                className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4"
                            >
                                <img
                                    src="https://img.freepik.com/darmowe-psd/3d-interfejs-prezentacji-makieta-strony-internetowej-na-bialym-tle_359791-208.jpg?w=2000&t=st=1693571717~exp=1693572317~hmac=996d7dfae29fb5c82626a2762e416d011c792ff375dd142b0d71c21bb91bbdd4"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-700">Women</span>
                                    <span className="text-lg font-bold  lg:text-xl">
                                        Sale
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-12 z-10">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center rounded-lg bg-blue-50 p-4 sm:p-8 lg:flex-row lg:justify-between">
                        <div className="mb-4 sm:mb-8 lg:mb-0">
                            <h2 className="text-center text-xl font-bold sm:text-2xl lg:text-left lg:text-3xl">
                                Zapisz sie do newslettera
                            </h2>
                            <p className="text-center text-gray-700 lg:text-left">
                                Badz na bierząco z nowościami!
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end">
                            <form className="mb-3 flex w-full max-w-md gap-2">
                                <input
                                    placeholder="Email"
                                    className="bg-gray-white w-full flex-1 rounded border border-gray-400 px-3 py-2  placeholder-gray-400 outline-none ring-blue-400 transition focus:ring"
                                />

                                <button className="btn-main">Wyślij</button>
                            </form>

                            <p className="text-center text-xs text-gray-700 lg:text-right">
                                By signing up to our newsletter you agree to our{" "}
                                <a
                                    href="#"
                                    className="underline transition hover:text-second active:text-blue-600"
                                >
                                    Term of Service
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="underline transition hover:text-second active:text-blue-600"
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Dlaczego Strona Internetowa
                        </h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Growth
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>

                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Security
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>

                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Cloud
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>

                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Speed
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>

                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Support
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>

                        <div class="flex flex-col rounded-lg border p-4 md:p-6">
                            <h3 class="mb-2 text-lg font-semibold md:text-xl">
                                Dark Mode
                            </h3>
                            <p class="mb-4 text-gray-700">
                                Filler text is dummy text which has no meaning
                                however looks very similar to real text.
                            </p>
                            <a href="#" class="mt-auto font-bold text-second">
                                Czytaj więcej
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-20">
                        <h2 className="mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl">
                            Krok po kroku
                        </h2>

                        <p className="mx-auto max-w-screen-md text-center text-gray-700 md:text-lg">
                            This is a section of some simple filler text, also
                            known as placeholder text. It shares some
                            characteristics of a real written text but is random
                            or otherwise generated.
                        </p>
                    </div>
                    <section className="max-w-screen-2xl mx-auto py-10">
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="relative lg:w-1/2">
                                <StaticImage
                                    className="rounded-lg"
                                    quality={100}
                                    src="../images/x1.jpg"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                                <div className="relative pl-5 mb-3">
                                    <h2 className="text-lg font-bold">
                                        Why do we use it??
                                    </h2>
                                    <div className="absolute rounded-lg top-0 left-0 bg-second h-full w-2" />
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    Czytaj więcej-or-less normal distribution of
                                    letters, as opposed to using 'Content here,
                                    content here', making it look like readable
                                    English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for
                                    'lorem ipsum' will uncover many web sites
                                    still in their infancy. Various versions
                                    have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected
                                    humour and the like).
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="lg:w-1/2 lg:order-1 relative">
                                <StaticImage
                                    quality={100}
                                    className="rounded-lg"
                                    src="../images/x2.jpg"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                                <div className="relative pl-5 mb-3">
                                    <h2 className="text-lg font-bold">
                                        Why do we use it??
                                    </h2>
                                    <div className="absolute rounded-lg top-0 left-0 bg-yellow-400 h-full w-2" />
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    Czytaj więcej-or-less normal distribution of
                                    letters, as opposed to using 'Content here,
                                    content here', making it look like readable
                                    English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for
                                    'lorem ipsum' will uncover many web sites
                                    still in their infancy. Various versions
                                    have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected
                                    humour and the like).
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-center">
                            <div className="relative lg:w-1/2">
                                <StaticImage
                                    className="rounded-lg"
                                    quality={100}
                                    src="../images/x3.jpg"
                                />
                            </div>
                            <div className="flex flex-col items-start justify-center lg:w-1/2 p-12">
                                <div className="relative pl-5 mb-3">
                                    <h2 className="text-lg font-bold">
                                        Why do we use it??
                                    </h2>
                                    <div className="absolute rounded-lg top-0 left-0 bg-second h-full w-2" />
                                </div>
                                <p>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    Czytaj więcej-or-less normal distribution of
                                    letters, as opposed to using 'Content here,
                                    content here', making it look like readable
                                    English. Many desktop publishing packages
                                    and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for
                                    'lorem ipsum' will uncover many web sites
                                    still in their infancy. Various versions
                                    have evolved over the years, sometimes by
                                    accident, sometimes on purpose (injected
                                    humour and the like).
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-blue-50 p-4 sm:flex-row md:p-8">
                        <div>
                            <h2 class="text-xl font-bold text-main md:text-2xl">
                                Inspiracje na stronę internetową
                            </h2>
                            <p class="text-gray-600">No Credit Card required</p>
                        </div>

                        <Link to="/" className="btn-main">
                            Zobacz funkcje
                        </Link>
                    </div>
                </div>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl text-center pb-6">
                        Aktualności
                    </h2>
                    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div class="flex items-center gap-12">
                            <p class="hidden max-w-screen-sm text-gray-500 md:block">
                                This is a section of some simple filler text,
                                also known as placeholder text. It shares some
                                characteristics of a real written text.
                            </p>
                        </div>

                        <a
                            href="#"
                            class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                        >
                            Więcej
                        </a>
                    </div>

                    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        {data.allDatoCmsBlog.edges.map(({ node }) => (
                            <Link
                                to={node.slug}
                                class="group relative flex flex-col items-end overflow-hidden rounded-lg"
                            >
                                <GatsbyImage
                                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-110 z-10"
                                    loading="lazy"
                                    image={getImage(node.img)}
                                    alt="seovileo"
                                    onLoad={handleImageLoaded}
                                />
                                {!imageLoaded && <Spinner />}

                                <div class="relative p-4 font-semibold text-white z-10 rounded-lg w-full">
                                    <p>{node.title}</p>
                                    <div
                                        className="absolute bottom-0 left-0 h-full w-full -z-10"
                                        style={{
                                            background: `linear-gradient(to top, ${node.img.colors[2].hex} 0%, ${node.img.colors[2].hex} 100%)`,
                                        }}
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Seovileo" description="Seovileo" />;
