import React, { useState, useEffect } from "react";
import {  Link } from "gatsby";

import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function DesktopNav() {
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

    const handleOfferHover = () => {
        setOfferMenu(true);
    };

    const handleLinkLeave = () => {
        setOfferMenu(false);
    };
    return (
        <header
            className={`relative z-[999] w-full ${
                navbar
                    ? "sticky mx-auto top-0 slide-bottom shadow-xl bg-white"
                    : "text-black"
            }`}
        >
            <div className={`relative wrapper flex-b py-4 w-full z-50`}>
                <div className="flex items-center justify-center">
                    <Link
                        to="/"
                        className=" hover:bg-transparent -tracking-wide md:text-lg sm:text-2xl lg:text-[1.6rem] font-bold mr-10"
                    >
                        PREMWATCH
                    </Link>

                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder="szukaj produktu"
                            className="w-96 border-b border-gray-400 px-2 ml-5 py-2 text-sm -tracking-wide"
                        />
                        <button class="absolute right-1 top-2">
                            <FiSearch className="text-xl text-gray-500" />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-6 text-2xl">
                    <Link to="/">
                        <FaUser />
                    </Link>
                    <Link to="/">
                        <FaHeart />
                    </Link>

                    <FaShoppingCart />
                </div>
            </div>
            <div className="border-b">
                <div className="flex-b font-semibold uppercase wrapper ">
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        Smartwatch
                    </Link>
                    <li
                        onMouseEnter={handleOfferHover}
                        onMouseLeave={handleLinkLeave}
                        className="list-none group w-max h-max"
                    >
                        <Link
                            className="px-7 py-3.5 group-hover:text-white border-b-2 border-transparent hover:border-green-500 z-50 relative"
                            to="/"
                        >
                            Zegarki Męskie
                            <div
                                className={`
                        absolute top-[105%] -z-10 -left-3/4 text-black p-10 text-sm capitalize border-gray-300
                            ${showOfferMenu ? "bg-white " : "hidden"}
                        `}
                            >
                                <div
                                    className={`flex-s ${
                                        showOfferMenu ? "scale-100" : " scale-0"
                                    }`}
                                >
                                    <div>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">Hugo Boss</p>
                                            <div className="flex">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">Diesel</p>
                                            <div className="flex items-end justify-between">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">Emporio</p>
                                            <div className="flex items-end justify-between">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">
                                                Calvin Klain
                                            </p>
                                            <div className="flex items-end justify-between">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">Hugo Boss</p>
                                            <div className="flex">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">Emporio</p>
                                            <div className="flex items-end justify-between">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                        <Link
                                            to="/"
                                            className="flex-b hover:bg-gray-50 py-4 px-8"
                                        >
                                            <p className="w-max">
                                                Calvin Klain
                                            </p>
                                            <div className="flex items-end justify-between">
                                                <div className="bg-yellow-400 h-5 w-[1.5px] mx-5" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                onMouseEnter={handleLinkLeave}
                                className={`${
                                    showOfferMenu
                                        ? "fixed top-0 left-0 h-full w-full bg-black/80 -z-20"
                                        : "hidden"
                                }`}
                            />
                        </Link>
                    </li>
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        Zegarki Damskie
                    </Link>
                    <Link
                        className="px-7 py-3 bg-yellow-400 text-white relative border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        <p>promocje</p>
                        <div className="bg-black text-white text-[8px] p-1 absolute left-1/2 -translate-x-1/2 -bottom-3 font-bold">
                            NOWOŚĆ
                        </div>
                    </Link>
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        od ręki
                    </Link>
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        akcesoria
                    </Link>
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors"
                        to="/"
                    >
                        kontakt
                    </Link>
                </div>
            </div>
        </header>
    );
}
