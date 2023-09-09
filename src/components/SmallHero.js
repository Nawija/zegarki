import React, { useState, useEffect } from "react";

import { AiFillHome } from "react-icons/ai";

import ShipVideo from "../video/ss.mp4";
import { Link } from "gatsby";

const SmallHero = ({ title, desc, smallHeroSlug1, smallHeroSlug2 }) => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    const handleVideoLoaded = () => {
        setVideoLoaded(true);
    };
    useEffect(() => {
        const delay = 100;
        const timer = setTimeout(() => {
            handleVideoLoaded();
        }, delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[30vh] w-full relative lg:-mt-16 lg:mb-20">
            <div className="top-0 left-0 bg-gradient-to-t opacity-80 from-blue-500 to-blue-800 mix-blend-multiply h-full w-full" />
            <div
                className="absolute h-full w-full top-0 left-0 bg-fixed -z-10 object-cover"
                style={{
                    backgroundImage:
                        "url(https://img.freepik.com/darmowe-zdjecie/sniezny-szczyt-gorski-pod-generatywna-sztuczna-inteligencja-majestatu-gwiazdzistej-galaktyki_188544-9650.jpg?w=2000&t=st=1694255929~exp=1694256529~hmac=b45ff9a1970e9cc4a7422ca5e8296d2ffb4e6852f8f33cb00472633a54f749db)",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            />

            <div className="text-white absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center w-[90%] sm:max-w-3xl">
                <p className="text-2xl lg:text-5xl font-semibold text-center">
                    {title}
                </p>
                <div className="w-1/4 h-[1px] bg-white mx-auto my-2 lg:my-6 rounded-xl" />

                <p className="lg:text-lg font-semibold text-center">
                    {desc || "seovileo.pl"}
                </p>
            </div>
            <div className="bg-blue-50">
                <div className="max-w-[1200px] mx-auto text-[12px] flex items-center justify-start px-2">
                    <Link
                        className="p-2 hover:bg-blue-100 rounded-lg transition-colors"
                        to="/"
                    >
                        <AiFillHome className="text-base text-main" />
                    </Link>
                    {smallHeroSlug1 && (
                        <>
                            <span className="mx-1">/</span>
                            <Link
                                to={"/" + smallHeroSlug1}
                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center font-medium"
                            >
                                <p>{smallHeroSlug1}</p>
                            </Link>
                        </>
                    )}
                    {smallHeroSlug2 && (
                        <>
                            <span className="mx-1">/</span>
                            <Link
                                to={"/" + smallHeroSlug1 + "/" + smallHeroSlug2}
                                className="p-2 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center font-medium"
                            >
                                <p>{smallHeroSlug2}</p>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmallHero;
