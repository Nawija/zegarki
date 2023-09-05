import React, { useState, useEffect } from "react";

import { AiFillHome } from "react-icons/ai";
import { DiDotnet } from "react-icons/di";

import ShipVideo from "../video/ss.mp4";
import { Link } from "gatsby";

const SmallHero = ({ title, desc, smallHeroSlug1 }) => {
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
        <div className="h-[17rem] w-full relative mb-20 mx-auto">
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

            <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center w-[90%] sm:max-w-3xl">
                <p className="text-3xl lg:text-6xl font-semibold text-center">
                    {title}
                </p>
                <p className="text-lg font-semibold text-center mt-6">{desc}</p>
            </div>
            <div className="bg-blue-50">
                <div className="max-w-[1200px] mx-auto text-[13px] flex items-center justify-start px-2">
                    <Link
                        className="p-3 hover:bg-blue-100 rounded-lg transition-colors"
                        to="/"
                    >
                        <AiFillHome />
                    </Link>
                    {smallHeroSlug1 && (
                        <Link
                            to={"/" + smallHeroSlug1}
                            className="p-3 hover:bg-blue-100 rounded-lg transition-colors flex items-center justify-center font-medium"
                        >
                            <DiDotnet className="mr-3" />
                            <p>{smallHeroSlug1}</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmallHero;
