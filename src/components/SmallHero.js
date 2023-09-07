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
        <div className="h-[10rem] lg:h-[16rem] w-full relative mb-8 lg:mb-20 mx-auto -mt-16">
            <div
                className={`relative h-full w-full ${
                    videoLoaded ? "fade-in" : "fade-out"
                }`}
            >
                <video
                    src={ShipVideo}
                    className="absolute top-0 left-0 h-full w-full object-cover -z-10"
                    autoPlay
                    muted
                    loop
                    onLoad={handleVideoLoaded}
                />
            </div>

            {videoLoaded && (
                <div className="absolute top-0 left-0 bg-gradient-to-t opacity-90 from-blue-500 to-blue-800 h-full w-full" />
            )}
            {!videoLoaded && (
                <div className="absolute top-0 left-0 bg-gradient-to-t opacity-90 from-blue-500 to-blue-800 h-full w-full" />
            )}

            <div className="text-white absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center w-[90%] sm:max-w-3xl">
                <p className="text-2xl lg:text-5xl font-semibold text-center">
                    {title}
                </p>
                <div className="w-1/4 h-[1px] bg-white mx-auto mt-6 rounded-xl" />

                <p className="text-lg font-semibold text-center mt-6">
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
