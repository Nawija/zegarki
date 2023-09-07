import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { BiSolidChevronDown } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";
import { MdOutlineBorderColor, MdShoppingCart } from "react-icons/md";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 400) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    const [showOfferMenu, setOfferMenu] = useState(false);
    const [showFunctionMenu, setFunctionMenu] = useState(false);

    const handleOfferHover = () => {
        setOfferMenu(true);
        setFunctionMenu(false);
    };

    const handleFunctionHover = () => {
        setFunctionMenu(true);
        setOfferMenu(false);
    };

    const handleLinkLeave = () => {
        setOfferMenu(false);
        setFunctionMenu(false);
    };

    return (
        <header
            className={`relative hidden lg:flex z-[999] w-full ${
                navbar
                    ? "sticky mx-auto top-0 slide-bottom shadow-xl bg-white"
                    : "text-white"
            }`}
        >
            <nav className="flex items-center sticky justify-between px-4 py-2 max-w-screen-xl w-full mx-auto">
                <Link to="/" className="flex items-center justify-between">
                    <StaticImage
                        quality={100}
                        className="w-9 mr-1"
                        src="../../images/favicon.png"
                    />
                    <p className="font-semibold -tracking-wide">Seovileo</p>
                </Link>

                <ul className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-4 lg:font-medium lg:text-[14px] lg:ml-10">
                    <li className="list-none">
                        <Link
                            to="/"
                            className={`py-3 px-3  rounded-lg ${
                                navbar
                                    ? "hover:bg-blue-50"
                                    : "hover:bg-black/40"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className={`flex items-center z-0 justify-center list-none relative py-3 px-3 cursor-pointer rounded-lg ${
                            navbar ? "hover:bg-blue-50" : "hover:bg-black/40"
                        }`}
                        onMouseEnter={handleOfferHover}
                        onMouseLeave={handleLinkLeave}
                    >
                        <p
                            className={`${
                                showOfferMenu ? "text-yellow-500" : ""
                            }`}
                        >
                            Oferta
                        </p>
                        <BiSolidChevronDown
                            className={`transition-[transform,colors] ${
                                showOfferMenu ? "rotate-90 text-yellow-500" : ""
                            } `}
                        />
                        <div
                            className={`
                        absolute rounded-lg top-[99%] z-50 left-1/2 -translate-x-1/2 delay-100 text-black p-10 border-b-2 border-gray-300
                            ${showOfferMenu ? "bg-white" : "hidden"}
                        `}
                        >
                            <Link
                                to="strona-internetowa"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Strona Internetowa</p>
                                <div className="flex">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="sklep-internetowy"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Sklep Internetowy</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/pozycjonowanie-seo"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/projekt-graficzny"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Projekt Graficzny</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <SiTaichigraphics className="text-2xl" />{" "}
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li
                        className={`flex items-center z-0 justify-center list-none relative py-3 px-3 cursor-pointer  rounded-lg ${
                            navbar ? "hover:bg-blue-50" : "hover:bg-black/40"
                        }`}
                        onMouseEnter={handleFunctionHover}
                        onMouseLeave={handleLinkLeave}
                    >
                        <p
                            className={`${
                                showFunctionMenu ? "text-blue-500" : ""
                            }`}
                        >
                            Smart
                        </p>
                        <BiSolidChevronDown
                            className={`transition-[transform,colors] ${
                                showFunctionMenu
                                    ? "rotate-90 text-blue-500"
                                    : ""
                            } `}
                        />
                        <div
                            className={`
                        absolute rounded-lg top-[99%] bg-white left-1/2 -translate-x-1/2 delay-100 text-black p-10 border-b-2 border-gray-300
                            ${showFunctionMenu ? "" : "hidden"}
                        `}
                        >
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Inspiracje</p>
                                <div className="flex">
                                    <div className="bg-blue-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Funkcje</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-blue-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-blue-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Projekt Graficzny</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-blue-400 h-5 w-[1.5px] mx-5" />
                                    <SiTaichigraphics className="text-2xl" />{" "}
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/galeria"
                            className={`py-3 px-3 rounded-lg ${
                                navbar
                                    ? "hover:bg-blue-50"
                                    : "hover:bg-black/40"
                            }`}
                        >
                            Galeria
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/blog"
                            className={`py-3 px-3 rounded-lg ${
                                navbar
                                    ? "hover:bg-blue-50"
                                    : "hover:bg-black/40"
                            }`}
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/kontakt"
                            className={`py-3 px-3 rounded-lg ${
                                navbar
                                    ? "hover:bg-blue-50"
                                    : "hover:bg-black/40"
                            }`}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>

                <Link
                    to="/darmowa-wycena"
                    className=" hidden lg:flex items-center justify-center border border-blue-600 bg-gradient-to-b from-blue-400 to-blue-700 shadow-lg shadow-blue-800 text-white py-2 px-3 rounded-lg relative font-semibold tracking-wide text-[14px]"
                >
                    <p className="mr-1">Darmowa Wycena</p>
                    <MdOutlineBorderColor className="text-sm" />
                    <div className="absolute h-2.5 w-2.5 bg-yellow-400 rounded-full -top-1 -right-1 animate-ping" />
                </Link>
            </nav>
        </header>
    );
};

export default Header;
