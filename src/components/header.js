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
                className={`max-w-screen-2xl mx-auto px-4 z py-2 flex flex-col items-center justify-between w-full transition-colors duration-100 -z-20 ${
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
                    <Link
                        onClick={closeMenu}
                        title="Kontakt"
                        aria-label="kontakt"
                        className={`flex items-center justify-center border-green-600 rounded-lg text-base lg:text-sm font-semibold shadow-md px-4 py-2 border transition md:hover:scale-[.98] ${
                            navbar && !showMenu
                                ? ""
                                : "text-black shadow-green-600/30 md:hover:shadow-xl"
                        }`}
                        to="tel:+48570037077"
                    >
                        <svg
                            width="15"
                            height="15"
                            className="lg:mr-2"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.12109 0.573968C2.31793 0.377409 2.55429 0.22493 2.81451 0.126636C3.07473 0.0283423 3.35287 -0.013522 3.6305 0.00381754C3.90812 0.0211571 4.17889 0.0973045 4.42486 0.227214C4.67083 0.357123 4.88639 0.537827 5.05725 0.757351L7.07656 3.35172C7.44667 3.82762 7.57717 4.44752 7.43092 5.03255L6.81557 7.49641C6.78375 7.62402 6.78547 7.7577 6.82056 7.88445C6.85564 8.01121 6.9229 8.12673 7.01581 8.21982L9.77985 10.9841C9.87304 11.0772 9.98875 11.1446 10.1157 11.1796C10.2427 11.2147 10.3766 11.2164 10.5043 11.1843L12.9669 10.5689C13.2556 10.4967 13.5569 10.4911 13.848 10.5525C14.1392 10.6139 14.4126 10.7407 14.6476 10.9233L17.2417 12.9417C18.1743 13.6673 18.2598 15.0455 17.4251 15.8792L16.2619 17.0425C15.4294 17.875 14.1852 18.2407 13.0254 17.8323C10.0568 16.7877 7.36148 15.0881 5.13937 12.8595C2.91114 10.6376 1.21168 7.94245 0.167025 4.97404C-0.240213 3.81524 0.125401 2.56981 0.957875 1.73727L2.12109 0.573968Z"
                                fill="black"
                            />
                        </svg>
                        <p className="mr-1 w-max lg:flex hidden">
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
                <ul
                    className={`absolute top-[99%] left-0 w-full text-center -z-10 ${
                        showMenu
                            ? "text-lg bg-white space-y-5 lg:space-y-0 opacity-100 transition pt-2 pb-12 lg:pb-2 -translate-y-0 "
                            : "py-2 lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-around lg:mt-3 lg:translate-y-0 lg:py-0 opacity-0 -translate-y-full transition lg:z-10 lg:max-w-screen-lg lg:border-t"
                    }`}
                >
                    <li className="mx-5 my-2 lg:my-0">
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
                    <li className="mx-5 my-2 lg:my-0">
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
                    <li className="mx-5 my-2 lg:my-0">
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

                    <li className="mx-5 my-2 lg:my-0">
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

                    <li className="mx-5 my-2 lg:my-0">
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
                    <li className="mx-5 py-2 lg:my-0 relative bg-yellow-500">
                        <Link
                            onClick={closeMenu}
                            title="Darmowy Kalkulator"
                            aria-label="Darmowy Kalkulator"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold text-base lg:text-sm hover-link transition-colors px-5 relative text-white tracking-wide"
                                    : "font-semibold text-base lg:text-sm hover-link transition-colors px-5 relative text-white tracking-wide"
                            }
                            to="/"
                        >
                            Kalkulator
                            <p className="absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 text-[7px] text-white font-bold tracking-widest bg-black px-2 uppercase">
                                Darmowy
                            </p>
                        </Link>
                    </li>

                    <li className="mx-5 my-2 lg:my-0">
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
                    <li className="mx-5 my-2 lg:my-0">
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
