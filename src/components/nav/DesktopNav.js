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
                            className="w-96 bg-white border-b border-gray-400 px-2 ring-gray-300 focus:border-gray-300 active:bg-gray-100 ml-5 py-1.5 text-[14px] -tracking-wide font-medium"
                        />
                        <button class="absolute right-1 top-1.5">
                            <FiSearch className="text-xl" />
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
                <div className="flex-b font-bold uppercase wrapper ">
                    <Link className="px-7 py-4" to="/">
                        Smartwatch
                    </Link>
                    <Link className="px-7 py-4" to="/">
                        Zegarki Męskie
                    </Link>
                    <Link className="px-7 py-4" to="/">
                        Zegarki Damskie
                    </Link>
                    <Link
                        className="px-7 py-4 bg-yellow-400 text-white relative"
                        to="/"
                    >
                        <p>promocje</p>
                        <div className="bg-black text-white text-[9px] p-1 absolute left-1/2 -translate-x-1/2 -bottom-3 overflow-visible">
                            NOWOŚCI
                        </div>
                    </Link>
                    <Link className="px-7 py-4" to="/">
                        od ręki
                    </Link>
                    <Link className="px-7 py-4" to="/">
                        akcesoria
                    </Link>
                    <Link className="px-7 py-4" to="/">
                        kontakt
                    </Link>
                </div>
            </div>
        </header>
    );
}
