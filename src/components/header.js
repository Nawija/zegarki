import React, { useState, useEffect } from "react";

import { BiSolidChevronDown } from "react-icons/bi";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 1) {
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
        <header className="flex items-center justify-between px-2 py-4 max-w-screen-xl mx-auto">
            <Link to="/" className="flex items-center justify-center">
                <StaticImage
                    quality={100}
                    className="w-11 mr-1"
                    src="../images/favicon.png"
                />
                <p className="font-semibold text-gray-800">Seovileo</p>
            </Link>
            <nav>
                <ul className="flex items-center justify-center space-x-4 font-medium text-[15px]">
                    <li className="list-none">
                        <Link to="/" className="py-1 px-2">
                            Home
                        </Link>
                    </li>
                    <li
                        className="list-none relative py-1 px-2 cursor-pointer"
                        onMouseEnter={handleLinkHover}
                        onMouseLeave={handleLinkHover}
                    >
                        <p>Oferta</p>
                        <BiSolidChevronDown
                            className={`absolute -right-2 top-1/2 -translate-y-1/2 transition-transform ${
                                isHovered ? "rotate-90" : ""
                            } `}
                        />
                        <div
                            className={`
                            flex flex-col items-center w-max rounded-lg justify-center space-y-8 text-black p-10 bg-white/30 backdrop-blur-lg 
                                ${
                                    isHovered
                                        ? "absolute top-[99%] left-1/2 -translate-x-1/2 z-50 opacity-100"
                                        : "opacity-0 hidden"
                                }
                            `}
                        >
                            <Link to="/galeria">Kalkulator Stron</Link>
                            <Link to="/">Kalkulator Sklepów</Link>
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="py-1 px-2">
                            Blog
                        </Link>
                    </li>
                    <li className="list-none">
                        <Link to="/" className="py-1 px-2">
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link
                to="/"
                className="border border-yellow-400 p-2 rounded-lg relative font-medium text-[15px]"
            >
                Darmowa Wycena
                <div className="absolute h-2.5 w-2.5 bg-orange-400 rounded-full -top-1 -right-1 animate-ping" />
            </Link>
            <button
                aria-label="Menu"
                onClick={handleMenu}
                className="lg:hidden p-2.5 transition-colors z-50"
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
        </header>
    );
};

export default Header;
