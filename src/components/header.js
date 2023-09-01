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

    const [isHovered, setIsHovered] = useState(false);

    const handleLinkHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <header
            className={`bg-white flex z-[999] relative ${
                navbar ? "sticky top-0 mx-auto slide-bottom" : ""
            }`}
        >
            <nav className="flex items-center sticky justify-between px-2 py-4 max-w-screen-xl w-full mx-auto">
                <Link to="/" className="flex items-center justify-between">
                    <StaticImage
                        quality={100}
                        className="w-10 mr-1"
                        src="../images/favicon.png"
                    />
                    <p className="font-semibold -tracking-wide text-main">
                        Seovileo
                    </p>
                </Link>

                <ul className="flex items-center bg-white justify-between space-x-4 font-medium text-[15px] ml-10">
                    <li className="list-none bg-white">
                        <Link
                            to="/"
                            className="py-3 px-3 hover:bg-blue-50 rounded-lg text-main"
                        >
                            Home
                        </Link>
                    </li>
                    <li
                        className="flex items-center z-0 bg-white justify-center list-none relative py-3 px-3 cursor-pointer hover:bg-blue-50 rounded-lg text-main"
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkHover}
                    >
                        <p>Oferta</p>
                        <BiSolidChevronDown
                            className={`transition-[transform,colors] ${
                                isHovered ? "rotate-90 text-yellow-500" : ""
                            } `}
                        />
                        <div
                            className={`
                            absolute rounded-lg top-[99%] -z-10 left-1/2 -translate-x-1/2 delay-100 text-black p-10 bg-white border-b-2 border-gray-300
                                ${
                                    isHovered
                                        ? " translate-y-0"
                                        : "-translate-y-[200%]"
                                }
                            `}
                        >
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg text-main"
                            >
                                <p className="w-max">Strona Internetowa</p>
                                <div className="flex">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <FaLaptopCode className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg text-main"
                            >
                                <p className="w-max">Sklep Internetowy</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <MdShoppingCart className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg text-main"
                            >
                                <p className="w-max">Pozycjonowanie SEO</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <TbSeo className="text-2xl" />{" "}
                                </div>
                            </Link>
                            <Link
                                to="/galeria"
                                className="flex items-center justify-between hover:bg-blue-50 py-4 px-8 rounded-lg text-main"
                            >
                                <p className="w-max">Projekt Graficzny</p>
                                <div className="flex items-end justify-between">
                                    <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                    <SiTaichigraphics className="text-2xl" />{" "}
                                </div>
                            </Link>
                        </div>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/"
                            className="py-3 px-3 hover:bg-blue-50 rounded-lg text-main"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link
                            to="/"
                            className="py-3 px-3 hover:bg-blue-50 rounded-lg text-main"
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>

                <Link
                    to="/darmowa-wycena"
                    className="flex items-center justify-center border border-blue-600 bg-gradient-to-b from-blue-400 to-blue-700 shadow-lg shadow-blue-800 text-white py-2 px-3 rounded-lg relative font-semibold tracking-wide text-[14px]"
                >
                    <p className="mr-1">Darmowa Wycena</p>
                    <MdOutlineBorderColor className="text-sm" />
                    <div className="absolute h-2.5 w-2.5 bg-yellow-400 rounded-full -top-1 -right-1 animate-ping" />
                </Link>
                <button
                    aria-label="Menu"
                    onClick={handleMenu}
                    className="lg:hidden p-2.5 z-50"
                >
                    <div
                        className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                            showMenu ? "translate-y-2 rotate-45" : ""
                        }`}
                    />
                    <div
                        className={`w-3 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                            showMenu ? "opacity-0" : ""
                        }`}
                    />
                    <div
                        className={`w-5 h-1 transition bg-gray-800 rounded-2xl m-1 ${
                            showMenu ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </button>
            </nav>
        </header>
    );
};

export default Header;
