import React, { useState, useEffect } from "react";

import ShipVideo from "../video/ss.mp4";

const SmallHero = ({ title }) => {
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
        <div className="h-[18rem] w-full relative mb-12">
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
                <h1 className="text-3xl lg:text-6xl font-semibold text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default SmallHero;
