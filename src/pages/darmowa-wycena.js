import React, { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import SmallHero from "../components/SmallHero";
import Spinner from "../components/Spinner";

const CalcPrice = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    const data = useStaticQuery(graphql`
        {
            allDatoCmsBlog(sort: { position: ASC }, limit: 4) {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                placeholder: NONE
                                width: 300
                                forceBlurhash: false
                            )
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

    const initialValues = Array.from({ length: 11 }, () => null);
    const [values, setValues] = useState(initialValues);

    const totalValue = values.reduce((acc, cur) => acc + cur, 0);

    const handleRadioChange = (event, categoryIndex) => {
        const { value } = event.target;
        const newValues = [...values];
        newValues[categoryIndex] = parseInt(value);
        setValues(newValues);
    };

    const handleCheckboxChange = (event, categoryIndex) => {
        const { value, checked } = event.target;
        const newValues = [...values];
        newValues[categoryIndex] = checked ? parseInt(value) : null;
        setValues(newValues);
    };

    return (
        <Layout>
            <SmallHero title="Kalkulator" />
            <div className="flex flex-col items-center justify-center text-center px-2 z-50 relative"></div>
            <div className="flex flex-wrap items-start justify-center max-w-screen-2xl mx-auto">
                <form
                    className="p-6 bg-blue-50 w-[90%] sm:w-4/5 md:w-4/6 lg:w-[55%] rounded-lg border mb-12 md:mb-2 lg:mb-24"
                    action="https://public.herotofu.com/v1/d1061fe0-e21a-11ed-8300-fd92f9e8911a"
                    method="post"
                    accept-charset="UTF-8"
                >
                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Typ strony internetowej
                        </p>
                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="radio"
                                    name="PageType"
                                    value="1400"
                                    checked={values[0] === 1400}
                                    onChange={(e) => handleRadioChange(e, 0)}
                                />
                                Multi Page
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="PageType"
                                    value="900"
                                    checked={values[0] === 900}
                                    onChange={(e) => handleRadioChange(e, 0)}
                                />
                                Landing Page
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="PageType"
                                    value="700"
                                    checked={values[0] === 700}
                                    onChange={(e) => handleRadioChange(e, 0)}
                                />
                                Blog
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start px-1 py-3">
                        <label className="font-semibold mb-1" htmlFor="t1">
                            Opisz swoją firmę
                        </label>
                        <textarea
                            className="mr-2 w-full px-4 py-3 h-24 rounded-lg"
                            type="text"
                            id="t1"
                            name="OpisFirmy"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start px-1 py-3">
                        <label className="font-semibold mb-1" htmlFor="t4">
                            Posiadasz identyfikację wizualną firmy?
                        </label>
                        <textarea
                            className="mr-2 w-full px-4 py-3 h-24 rounded-lg"
                            type="text"
                            id="t4"
                            name="IdentyfikacjaFirmy"
                        />
                        <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                            Opisz czy posiadasz kolory firmowe, logo lub
                            wykonane grafiki jak wizytówki czy grafiki
                            socialmedia. Będzie to miało wpływ na ujednolicenie
                            strony z Twoją marką.
                        </p>
                    </div>
                    <div className="flex flex-col items-start justify-start px-1 py-3">
                        <label className="font-semibold mb-1" htmlFor="t5">
                            Wygląd strony - Inspirację
                        </label>
                        <textarea
                            className="mr-2 w-full px-4 py-3 h-24 rounded-lg"
                            type="text"
                            id="t5"
                            placeholder="Pomoze okreslic wyglad strony internetowej"
                            name="Inspiracja"
                        />
                        <p className="text-sm text-gray-700 mt-1 px-1 md:w-[80%]">
                            Jeżeli istnieją strony, które Ci się podobają to
                            załącz powyżej linki do nich lub skorzystaj z takich
                            źródeł inspiracji jak{" "}
                            <Link
                                className="text-gray-700 underline"
                                to="https://pl.pinterest.com/search/pins/?q=web%20design&rs=typed"
                            >
                                pinterest.com
                            </Link>
                        </p>
                    </div>

                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">Posiadasz domenę?</p>
                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="radio"
                                    name="Domena"
                                    value="0"
                                    checked={values[1] === 0}
                                    onChange={(e) => handleRadioChange(e, 1)}
                                />
                                Tak
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Domena"
                                    value="50"
                                    checked={values[1] === 50}
                                    onChange={(e) => handleRadioChange(e, 1)}
                                />
                                Nie
                            </label>
                        </div>
                    </div>

                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">Posiadasz Hosting?</p>
                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="radio"
                                    name="Hosting"
                                    value="0"
                                    checked={values[2] === 0}
                                    onChange={(e) => handleRadioChange(e, 2)}
                                />
                                Tak
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Hosting"
                                    value="300"
                                    checked={values[2] === 300}
                                    onChange={(e) => handleRadioChange(e, 2)}
                                />
                                Nie
                            </label>
                        </div>
                    </div>

                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">
                            Ile podstron ma posiadać strona internetowa?
                        </p>

                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="radio"
                                    name="Podstrona"
                                    value="0"
                                    checked={values[3] === 0}
                                    onChange={(e) => handleRadioChange(e, 3)}
                                />
                                1-3 podstron
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Podstrona"
                                    value="300"
                                    checked={values[3] === 300}
                                    onChange={(e) => handleRadioChange(e, 3)}
                                />
                                4-6 podstron
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Podstrona"
                                    value="600"
                                    checked={values[3] === 600}
                                    onChange={(e) => handleRadioChange(e, 3)}
                                />
                                7-9 podstron
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="radio"
                                    name="Podstrona"
                                    value="900"
                                    checked={values[3] === 900}
                                    onChange={(e) => handleRadioChange(e, 3)}
                                />
                                Więcej
                            </label>
                        </div>
                    </div>

                    <div className="mb-2 mt-2">
                        <p className="font-semibold mb-1">Funkcje</p>
                        <div className="ml-2 py-2 flex flex-col">
                            <label>
                                <input
                                    className="mr-2 scale-110 cursor-pointer"
                                    type="checkbox"
                                    name="Sekcja Blog"
                                    value="100"
                                    checked={values[4] === 100}
                                    onChange={(e) => handleCheckboxChange(e, 4)}
                                />
                                Sekcja Blog
                            </label>

                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    name="Sekcja News"
                                    value="100"
                                    checked={values[5] === 100}
                                    onChange={(e) => handleCheckboxChange(e, 5)}
                                />
                                Sekcja News
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    name="Formularz Kontaktowy"
                                    value="50"
                                    checked={values[6] === 50}
                                    onChange={(e) => handleCheckboxChange(e, 6)}
                                />
                                Formularz Kontaktowy
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    name="Mapa Google 2D/3D"
                                    value="50"
                                    checked={values[7] === 50}
                                    onChange={(e) => handleCheckboxChange(e, 7)}
                                />
                                Mapa Google 2D/3D
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    name="Kalkulator wyceny"
                                    value="150"
                                    checked={values[8] === 150}
                                    onChange={(e) => handleCheckboxChange(e, 8)}
                                />
                                Kalkulator wyceny
                            </label>
                            <label>
                                <input
                                    className="mr-2 scale-110"
                                    type="checkbox"
                                    name="Chat"
                                    value="50"
                                    checked={values[9] === 50}
                                    onChange={(e) => handleCheckboxChange(e, 9)}
                                />
                                Chat
                            </label>
                        </div>
                        <div className="mb-2 mt-2">
                            <p className="font-semibold mb-1">
                                Kto dostarczy treści?
                            </p>
                            <div className="ml-2 py-2 flex flex-col">
                                <label>
                                    <input
                                        className="mr-2 scale-110 cursor-pointer"
                                        type="radio"
                                        name="Zleceniodawca"
                                        value="0"
                                        checked={values[10] === 0}
                                        onChange={(e) =>
                                            handleRadioChange(e, 10)
                                        }
                                    />
                                    Zleceniodawca
                                </label>

                                <label>
                                    <input
                                        className="mr-2 scale-110"
                                        type="radio"
                                        name="Wykonawca"
                                        value="600"
                                        checked={values[11] === 600}
                                        onChange={(e) =>
                                            handleRadioChange(e, 11)
                                        }
                                    />
                                    Wykonawca
                                </label>

                                <input
                                    checked
                                    className="hidden"
                                    type="radio"
                                    id="totalValue"
                                    value={totalValue}
                                    name="Suma"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between px-1 mt-8 md:mt-16">
                        <p className="font-bold md:text-lg text-green-700 w-max">
                            Cena: {totalValue}
                        </p>
                        <button className="btn-main">Wyślij Formularz</button>
                    </div>
                </form>
                <div className="flex flex-col space-y-5 lg:ml-6 w-full sm:px-8 lg:px-0 md:w-3/4 lg:w-1/4">
                    <p className="font-semibold mx-6 tracking-wide">
                        Blog Post:
                    </p>
                    {data.allDatoCmsBlog.edges.map(({ node }) => (
                        <div className="flex mx-6 flex-col items-start gap-4 lg:gap-6">
                            <Link
                                to={`/blog/` + node.slug}
                                className="group w-full lg:w-full h-44 lg:h-44 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                            >
                                <GatsbyImage
                                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition-transform duration-300"
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

                                <div className="mb-12">
                                    <Link
                                        to={`/blog/` + node.slug}
                                        className="linkColor hoverLink text-sm active:text-gray-900 font-semibold transition duration-100"
                                    >
                                        Zobacz Artykuł &#8594;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Strony Internetowe"
        siteUrl="https://seovileo.pl/darmowa-wycena"
    />
);
export default CalcPrice;
