import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const HandleMenu = () => {
        setMenu(!showMenu);
    };
    const falseMenu = () => {
        setMenu(false);
    };


    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
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
                    z-50 mx-auto relative text-center
            "
        >
            <div
                className={
                    "bg-white fixed top-0 left-1/2 -translate-x-1/2 transition-colors duration-200 w-full"
                }
            >
                <div
                    className={
                        !navbar
                            ? "h-full w-full py-1 absolute top-0 -z-10 transition-colors duration-300"
                            : "h-full w-full py-1 bg-white shadow-2xl absolute top-0 -z-10 transition-colors duration-300"
                    }
                ></div>
                <nav
                    className={
                        showMenu
                            ? "max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-center justify-between w-full navTextColor bg-white transition-colors duration-100 z-50"
                            : "max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-center justify-between lg:px-[15%] w-full navTextColor transition-colors duration-100 z-50"
                    }
                >
                    <Link
                        to="/"
                        className="flex lg:hidden items-center justify-center"
                        aria-label="logo"
                    >
                        <div className="h-auto w-20">
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                src="../images/favicon.jpg"
                            />
                        </div>
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={HandleMenu}
                        className="group lg:hidden bg-gray-100 p-2.5 transition-colors duration-200 z-50 rounded-lg"
                    >
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all m-1 bg-gray-700 rounded-lg"
                                    : "w-5 h-1 transition-all m-1 translate-y-2  bg-gray-700 rotate-45 rounded-lg"
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-3 h-1 transition-all m-1 bg-gray-700 rounded-lg"
                                    : "w-3 h-1 transition-all m-1 opacity-0 bg-gray-700 "
                            }
                        />
                        <div
                            className={
                                !showMenu
                                    ? "w-5 h-1 transition-all m-1 bg-gray-700 rounded-lg"
                                    : "w-5 h-1 transition-all m-1 -translate-y-2  bg-gray-700 -rotate-45 rounded-lg"
                            }
                        />
                    </button>
                    <ul
                        className={
                            showMenu
                                ? "absolute text-lg top-full left-0 pb-4 flex flex-col lg:static text-main text-center w-full bg-white shadow-2xl opacity-100 transition duration-200 -translate-y-0 -z-10"
                                : "absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-center lg:top-0 lg:translate-y-0 lg:py-0 text-main text-center w-full opacity-0 -translate-y-full transition duration-100 -z-10 lg:z-10 lg:ml-8"
                        }
                    >
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Home"
                                className={
                                    navbar
                                        ? "text-gray-800 transition-colors text-sm font-semibold"
                                        : "text-gray-800 transition-colors text-sm font-semibold"
                                }
                                to="/"
                            >
                                Strona Główna
                            </Link>
                        </li>

                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Produkty"
                                className={
                                    navbar
                                        ? "text-gray-800 transition-colors text-sm font-semibold"
                                        : "text-gray-800 transition-colors text-sm font-semibold"
                                }
                                to="/produkty"
                            >
                                Produkty
                            </Link>
                        </li>
                        <Link
                            onClick={falseMenu}
                            to="/"
                            className={
                                navbar
                                    ? "flex-col hidden hover:scale-105 transition-all duration-300 lg:flex h-auto w-28 mx-8 items-center justify-center"
                                    : "flex-col hidden hover:scale-105 transition-all duration-300 lg:flex h-auto w-36 mx-12 items-center justify-center"
                            }
                            aria-label="logo"
                        >
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                placeholder="none"
                                src="../images/favicon.jpg"
                            />
                        </Link>
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Galeria"
                                className={
                                    navbar
                                        ? "text-gray-800 transition-colors text-sm font-semibold"
                                        : "text-gray-800 transition-colors text-sm font-semibold"
                                }
                                to="/galeria"
                            >
                                Galeria
                            </Link>
                        </li>
                        <li className="mx-8 my-2 px-2 py-2">
                            <Link
                                onClick={falseMenu}
                                aria-label="Kontakt"
                                className={
                                    navbar
                                        ? "text-gray-800 transition-colors text-sm font-semibold"
                                        : "text-gray-800 transition-colors text-sm font-semibold"
                                }
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
    );
};

export default Header;