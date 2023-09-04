import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import StarVideo from "../video/star.mp4";
import { StaticImage } from "gatsby-plugin-image";
import Spinner from "../components/Spinner";

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
        const delay = 5000;
        const timer = setTimeout(() => {
            handleVideoLoaded();
        }, delay);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-[30rem] w-full relative">
            <div
                className={`relative h-full w-full ${
                    videoLoaded ? "fade-in" : "fade-out"
                }`}
            >
                <video
                    src={StarVideo}
                    className="absolute top-0 left-0 h-full w-full object-cover -z-10"
                    autoPlay
                    muted
                    loop
                    onLoad={handleVideoLoaded}
                />
            </div>

            {videoLoaded && (
                <div className="absolute top-0 left-0 bg-gradient-to-t opacity-80 from-blue-500 to-blue-800 h-full w-full" />
            )}
            {!videoLoaded && (
                <div className="absolute top-0 left-0 bg-gradient-to-t from-blue-500 to-blue-800 h-full w-full" />
            )}

            <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto text-center w-[90%] sm:max-w-3xl">
                <h1 className="text-3xl lg:text-6xl font-semibold text-center">
                    Niesamowite <br /> Strony Internetowe
                </h1>
                <div className="mt-10 max-w-screen-xl grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto">
                    <Link to="/">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                placeholder="none"
                                src="https://img.freepik.com/darmowe-wektory/ptak-kolorowe-logo-wektor-gradientu_343694-1365.jpg?w=826&t=st=1693820984~exp=1693821584~hmac=f291138d161f49816eba71a0e180135753782b4f1d3995f7156f297ea79f8df6"
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Nowoczesne Logo
                        </p>
                    </Link>
                    <Link to="/">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/darmowe-wektory/projektowanie-stron-produkcja-i-utrzymanie-stron-internetowych-grafika-internetowa-projekt-interfejsu-responsywna-strona-internetowa-inzynieria-oprogramowania-i-kolorowe-ikony_335657-2699.jpg?w=826&t=st=1693822463~exp=1693823063~hmac=624baa5f324bc0a6dff038a830d819745a89d05a8e25ad94abade1f1d9a0567a"
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Strona Internetowa
                        </p>
                    </Link>
                    <Link to="/">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/darmowe-wektory/ptak-kolorowe-logo-wektor-gradientu_343694-1365.jpg?w=826&t=st=1693820984~exp=1693821584~hmac=f291138d161f49816eba71a0e180135753782b4f1d3995f7156f297ea79f8df6"
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
                        </div>
                        <p className="text-[11px] font-bold bg-blue-200/20 rounded-lg text-white w-max px-2 py-0.5 text-center mx-auto mt-1 tracking-wider">
                            Nowoczesne Logo
                        </p>
                    </Link>
                    <Link to="/">
                        <div className="p-0.5 w-max flex items-center justify-center     mx-auto border-2 m-1 border-blue-300 rounded-lg overflow-hidden relative">
                            <StaticImage
                                className="h-24 w-32 rounded-lg hover:scale-110 transition-transform duration-300"
                                quality={100}
                                src="https://img.freepik.com/premium-wektory/koncepcja-optymalizacji-pod-katem-wyszukiwarek-webseo-z-wektorem-szkla-powiekszajacego_185038-484.jpg?w=1380"
                                onLoad={handleImageLoaded}
                            />
                            {!imageLoaded && <Spinner />}
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
