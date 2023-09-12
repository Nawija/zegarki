import React from "react";
import { Link } from "gatsby";

import { FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function DesktopNav() {
    return (
        <header className="bg-white relative  text-gray-900  z-50">
            <div className="relative wrapper flex-b py-4 w-full z-50">
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
                    <Link
                        className="px-7 py-3 border-b-2 border-transparent hover:border-green-500 transition-colors relative group hover:text-white"
                        to="/"
                    >
                        Zegarki Męskie
                        <div className="hidden group-hover:flex fixed top-0 left-0 bg-black/60 h-full w-full -z-50">

                        </div>
                    </Link>
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
