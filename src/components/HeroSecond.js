import React from "react";

// import LiveBackground from "../components/liveBackground";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/liveBacground.css";

const HeroSecond = () => (
    <div className="relative flex items-center justify-center w-full mx-auto">
        {/* <LiveBackground /> */}
        <div className="relative w-full -z-20">
            <StaticImage
                className="h-40 lg:h-52 xl:h-56 w-full md:w-full"
                quality={100}
                src="../images/tło.jpg"
                loading="eager"
                alt="tło"
                placeholder="dominantColor"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4 text-center">
                <p className="text-gray-100 text-2xl md:text-3xl lg:text-4xl font-bold w-max">
                    Profesionalne Usługi
                </p>
                <div className="flex items-center justify-center pr-2">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1884_1029)">
                            <path
                                d="M12 4V7M8 4V10M16 4V10"
                                stroke="#BA9100"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M12 18.5L9 20L9.5 16.5L7.5 14.5L10.5 14L12 11L13.5 14L16.5 14.5L14.5 16.5L15 20L12 18.5Z"
                                stroke="#BA9100"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1884_1029">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className="text-gray-200 text-sm md:text-xl w-max">
                        Gwarancja Wysokiej Jakośći
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default HeroSecond;
