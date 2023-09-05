import React, { useState, useEffect } from "react";

import { BiSolidChevronDown } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";
import { MdOutlineBorderColor, MdShoppingCart } from "react-icons/md";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

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
    const [showOfferMenuMobile, setOfferMenuMobile] = useState(false);
    const [showFunctionMenuMobile, setFunctionMenuMobile] = useState(false);

    const handleOfferMobile = () => setOfferMenuMobile(!showOfferMenuMobile);
    const handleFunctionMobile = () =>
        setFunctionMenuMobile(!showFunctionMenuMobile);

    return (
        <header
            className={`relative flex z-[999] w-full ${
                navbar || (!navbar && showMenu)
                    ? "sticky mx-auto top-0 slide-bottom shadow-xl bg-white"
                    : "text-white"
            }`}
        >
            <nav className="flex items-center sticky justify-between px-4 py-2 max-w-screen-xl w-full mx-auto">
                <Link to="/" className="flex items-center justify-between">
                    <StaticImage
                        quality={100}
                        className="w-9 mr-1"
                        src="../images/favicon.png"
                    />
                    <p className="font-semibold -tracking-wide">Seovileo</p>
                </Link>

                {/* -------------- Nav Mobile */}
                <ul
                    className={`lg:hidden overflow-auto absolute top-[99%] h-screen scroll-auto left-0 w-full font-semibold text-center transition-all duration-100 space-y-6 pb-6  ${
                        showMenu
                            ? "translate-y-0 shadow-xl bg-white"
                            : "-translate-y-[200%] text-[0px] text-white bg-transparent"
                    }`}
                >
                    <li className="list-none flex items-center justify-center">
                        <Link to="/" className="py-3 px-3" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <button
                        className="flex w-max mx-auto flex-col items-center justify-center list-none relative py-3 px-3 active:bg-none bg-transparent"
                        onClick={handleOfferMobile}
                    >
                        <div className="flex items-center justify-center">
                            <p>Oferta</p>
                            <BiSolidChevronDown
                                className={`transition-[transform,colors] ${
                                    showOfferMenuMobile
                                        ? "rotate-90 text-yellow-500"
                                        : ""
                                } `}
                            />
                        </div>
                        <div
                            className={`
                         overflow-y-scroll transition-[height] 
                            ${showOfferMenuMobile ? "h-64 p-4 " : "h-0"}
                        `}
                        >
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Strona Internetowa</p>
                                <div className="flex">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Sklep Internetowy</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Projekt Graficzny</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <SiTaichigraphics className="text-2xl" />{" "}
                                </div>
                            </Link>
                        </div>
                    </button>
                    <button
                        className="flex w-max mx-auto flex-col items-center justify-center list-none relative py-3 px-3 active:bg-none bg-transparent"
                        onClick={handleFunctionMobile}
                    >
                        <div className="flex items-center justify-center ">
                            <p>Smart</p>
                            <BiSolidChevronDown
                                className={`transition-[transform,colors] ${
                                    showFunctionMenuMobile
                                        ? "rotate-90 text-yellow-500"
                                        : ""
                                } `}
                            />
                        </div>
                        <div
                            className={`
                         overflow-y-scroll transition-[height] 
                            ${showFunctionMenuMobile ? "h-64 p-4 " : "h-0"}
                        `}
                        >
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Strona Internetowa</p>
                                <div className="flex">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Sklep Internetowy</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between py-4 px-8"
                            >
                                <p className="w-max">Projekt Graficzny</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <SiTaichigraphics className="text-2xl" />{" "}
                                </div>
                            </Link>
                        </div>
                    </button>
                    <li className="list-none flex items-center justify-center">
                        <Link to="/" className="py-3 px-3" onClick={closeMenu}>
                            Blog
                        </Link>
                    </li>
                    <li className="list-none flex items-center justify-center">
                        <Link to="/" className="py-3 px-3" onClick={closeMenu}>
                            Kontakt
                        </Link>
                    </li>
                </ul>

                {/* ---------Nav lg */}
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
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Strona Internetowa</p>
                                <div className="flex">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Sklep Internetowy</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
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
                <button
                    aria-label="Menu"
                    onClick={handleMenu}
                    className={`lg:hidden p-2.5 z-50 rounded-lg ${
                        showMenu || (navbar && showMenu)
                            ? ""
                            : "bg-black/40"
                    }`}
                >
                    <div
                        className={`w-5 h-1 transition rounded-2xl m-1 ${
                            showMenu || (navbar && showMenu)
                                ? "translate-y-2 rotate-45 bg-gray-800"
                                : "bg-white"
                        }`}
                    />
                    <div
                        className={`w-3 h-1 transition rounded-2xl m-1 ${
                            showMenu || (navbar && showMenu)
                                ? "opacity-0 bg-gray-800"
                                : "bg-white"
                        }`}
                    />
                    <div
                        className={`w-5 h-1 transition rounded-2xl m-1 ${
                            showMenu || (navbar && showMenu)
                                ? "-translate-y-2 -rotate-45 bg-gray-800"
                                : "bg-white"
                        }`}
                    />
                </button>
            </nav>
        </header>
    );
};

export default Header;
