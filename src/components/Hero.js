import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Spinner from "../components/Spinner";

import ShipVideo from "../video/ss.mp4";

const HeroCom = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };
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
        <div className="h-[35rem] w-full relative -mt-16">
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
                    Niesamowite <br /> Strony Internetowe
                </h1>
                <div className="mt-10 max-w-screen-xl grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto">
                    <Link to="/nowoczesne-logo">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                placeholder="dominantColor"
                                src="https://img.freepik.com/darmowe-wektory/ptak-kolorowe-logo-wektor-gradientu_343694-1365.jpg?w=826&t=st=1693820984~exp=1693821584~hmac=f291138d161f49816eba71a0e180135753782b4f1d3995f7156f297ea79f8df6"
                            />
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Nowoczesne Logo
                        </p>
                    </Link>
                    <Link to="/strona-internetowa">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/darmowe-wektory/projektowanie-stron-produkcja-i-utrzymanie-stron-internetowych-grafika-internetowa-projekt-interfejsu-responsywna-strona-internetowa-inzynieria-oprogramowania-i-kolorowe-ikony_335657-2699.jpg?w=826&t=st=1693822463~exp=1693823063~hmac=624baa5f324bc0a6dff038a830d819745a89d05a8e25ad94abade1f1d9a0567a"
                                placeholder="dominantColor"
                            />
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Strona Internetowa
                        </p>
                    </Link>
                    <Link to="/sklep-internetowy">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/darmowe-zdjecie/osoba-dodajaca-ubrania-do-koszyka-zblizenie-do-internetowej-kampanii-zakupowej_53876-98449.jpg?w=1380&t=st=1693839630~exp=1693840230~hmac=3bf820875cb5c9ffa982291e4c0afa5305e500b8039e6e30902463d2566a627d"
                                placeholder="dominantColor"
                            />
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Sklep Internetowy
                        </p>
                    </Link>
                    <Link to="/seo">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/premium-wektory/koncepcja-optymalizacji-pod-katem-wyszukiwarek-webseo-z-wektorem-szkla-powiekszajacego_185038-484.jpg?w=1380"
                                placeholder="dominantColor"
                            />
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            SEO
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroCom;
