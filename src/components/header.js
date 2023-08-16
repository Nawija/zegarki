import React, { useState, useEffect } from "react";
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

    return (
        <header
            className="
                    z-40 mx-auto sticky w-full top-0 text-center
            "
        >
            <div
                className="h-full w-full mx-auto absolute top-0 z-10 transition-colors duration-300
bg-white lg:bg-white/90 lg:backdrop-blur-xl shadow-lg"
            />
            <nav
                className={`max-w-screen-xl mx-auto px-4 pt-2 flex flex-col items-center justify-between w-full transition-colors duration-100 -z-20 ${
                    showMenu ? "bg-white" : ""
                }`}
            >
                <div className="flex items-center justify-between w-full z-20">
                    <Link
                        to="/"
                        className="flex items-center justify-center"
                        title="Logo Seovileo"
                        aria-label="Logo"
                    >
                        <div className="h-auto w-10 ">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                loading="eager"
                                placeholder="blurred"
                                src="../images/favicon.png"
                                alt="seovileo logo"
                            />
                        </div>
                        <p
                            className={`ml-1.5 -tracking-wide transition-colors font-bold ${
                                navbar && !showMenu
                                    ? "text-gray-700"
                                    : "text-gray-700"
                            }`}
                        >
                            Seovileo
                        </p>
                    </Link>
                    <div className="flex items-center justify-center space-x-3 pb-1 lg:space-x-6">
                        <Link
                            to="https://www.facebook.com/seovileo"
                            target="_blank"
                            className={`flex items-center justify-center border-blue-600 text-blue-700 rounded-lg text-base lg:text-sm font-semibold shadow-lg px-3 lg:px-4 py-2 border transition md:hover:scale-[.98] ${
                                navbar && !showMenu
                                    ? ""
                                    : " shadow-blue-600/20 md:hover:shadow-xl"
                            }`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="lg:mr-1"
                                width="20"
                                height="20"
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
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                            </svg>
                            <p className="w-max lg:flex hidden">
                                Facebook
                            </p>
                        </Link>
                        <Link
                            onClick={closeMenu}
                            title="Kontakt"
                            aria-label="kontakt"
                            className={`flex items-center justify-center border-green-600 text-green-700 rounded-lg text-base lg:text-sm font-semibold shadow-lg px-3 lg:px-4 py-2 border transition md:hover:scale-[.98] ${
                                navbar && !showMenu
                                    ? ""
                                    : " shadow-green-600/20 md:hover:shadow-xl"
                            }`}
                            to="tel:+48570037077"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="lg:mr-1"
                                width="20"
                                height="20"
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
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                            </svg>
                            <p className="w-max lg:flex hidden">
                                +48570037077
                            </p>
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
                    </div>
                </div>
                <ul
                    className={`absolute top-[99%] left-0 w-full text-center -z-10 ${
                        showMenu
                            ? "text-lg bg-white space-y-6 lg:space-y-0 opacity-100 transition pt-10 pb-12 lg:pb-2 -translate-y-0 "
                            : "py-2 lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-around lg:mt-3 lg:translate-y-0 lg:py-0 opacity-0 -translate-y-full transition lg:z-10 lg:max-w-screen-lg lg:border-t"
                    }`}
                >
                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Strona Główna"
                            aria-label="Strona Główna"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Projekty"
                            aria-label="Projekty"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/projekty"
                        >
                            Projekty
                        </Link>
                    </li>
                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Funkcje"
                            aria-label="Funkcje"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/funkcje"
                        >
                            Funkcje
                        </Link>
                    </li>

                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Usługi"
                            aria-label="Usługi"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/uslugi"
                        >
                            Usługi
                        </Link>
                    </li>

                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Galeria"
                            aria-label="Galeria"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/galeria"
                        >
                            Galeria
                        </Link>
                    </li>
                    <li className="mx-5 py-2 lg:my-0 relative bg-yellow-500 rounded-md">
                        <Link
                            onClick={closeMenu}
                            title="Darmowy Kalkulator"
                            aria-label="Darmowy Kalkulator"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link py-3 transition-colors px-5 relative text-white tracking-wide"
                                    : "font-semibold text-base lg:text-sm hover-link py-3 transition-colors px-5 relative text-white tracking-wide"
                            }
                            to="/"
                        >
                            Kalkulator
                            <p className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 text-[7px] text-white font-bold tracking-widest bg-black px-2  rounded-md uppercase">
                                Darmowy
                            </p>
                        </Link>
                    </li>

                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Blog"
                            aria-label="Blog"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="mx-5 py-2 lg:my-0">
                        <Link
                            onClick={closeMenu}
                            title="Kontakt"
                            aria-label="Kontakt"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-2 py-2"
                                    : "font-semibold  text-base lg:text-sm hover-link transition-colors px-2 py-2"
                            }
                            to="/kontakt"
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
