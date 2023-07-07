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
                    z-50 mx-auto fixed w-full top-0 text-center text-gray-100
            "
        >
            <div
                className={`h-full w-full mx-auto py-1 absolute top-0 -z-10 transition-colors duration-300 ${
                    navbar ? "bg-black lg:bg-black shadow-lg" : ""
                }`}
            />
            <nav
                className={`max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between w-full navTextColor transition-colors duration-100 z-50 ${
                    showMenu ? "bg-gray-950" : ""
                }`}
            >
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
                        className={`ml-1 tracking-wide transition-colors font-bold ${
                            navbar && !showMenu ? "first-color" : "second-color"
                        }`}
                    >
                        Seovileo
                    </p>
                </Link>
                <button
                    aria-label="Menu"
                    onClick={handleMenu}
                    className="lg:hidden p-2.5 transition-colors z-50 rounded-lg"
                >
                    <div
                        className={`w-5 h-1 transition bg-gray-100 m-1 rounded-lg ${
                            showMenu ? "translate-y-2 rotate-45" : ""
                        }`}
                    />
                    <div
                        className={`w-3 h-1 transition bg-gray-100 m-1 rounded-lg ${
                            showMenu ? "opacity-0" : ""
                        }`}
                    />
                    <div
                        className={`w-5 h-1 transition bg-gray-100 m-1 rounded-lg ${
                            showMenu ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </button>
                <ul
                    className={`absolute top-full left-0 w-full text-center ${
                        showMenu
                            ? "text-lg bg-gray-950 space-y-5 lg:space-y-0 opacity-100 transition pt-2 pb-12 lg:pb-2 -translate-y-0 -z-10"
                            : "py-2 lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-y-0 lg:py-0 opacity-0 -translate-y-full transition -z-10 lg:z-10 lg:ml-8"
                    }`}
                >
                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Strona Główna"
                            aria-label="Strona Główna"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold first-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                    : "font-semibold second-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                            }
                            to="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Projekty"
                            aria-label="Projekty"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold first-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                    : "font-semibold second-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                            }
                            to="/projekty"
                        >
                            Projekty
                        </Link>
                    </li>
                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Usługi"
                            aria-label="Usługi"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold first-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                    : "font-semibold second-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                            }
                            to="/uslugi"
                        >
                            Usługi
                        </Link>
                    </li>

                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Blog"
                            aria-label="Blog"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold first-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                    : "font-semibold second-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                            }
                            to="/blog"
                        >
                            Blog
                        </Link>
                    </li>
                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Kontakt"
                            aria-label="Kontakt"
                            className={
                                navbar && !showMenu
                                    ? "font-semibold first-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                                    : "font-semibold second-color text-base lg:text-sm hover-link transition-colors px-2 py-2 rounded-lg"
                            }
                            to="/kontakt"
                        >
                            Kontakt
                        </Link>
                    </li>
                    <li className="mx-5 my-2">
                        <Link
                            onClick={closeMenu}
                            title="Darmowa Wycena"
                            aria-label="Darmowa Wycena"
                            className={`flex relative items-center justify-center border-yellow-500 bg-black/40 text-base lg:text-sm w-max mx-auto font-semibold shadow-lg px-4 py-2 border rounded-lg transition md:hover:scale-[.98] ${
                                navbar && !showMenu
                                    ? "bg-black/5"
                                    : "text-gray-100 shadow-yellow-400/30 md:hover:shadow-xl"
                            }`}
                            to="/darmowa-wycena"
                        >
                            Darmowa Wycena
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                        </span>
                        </Link>
                        
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
