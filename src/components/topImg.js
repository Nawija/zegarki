import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = () => (
    <section className="w-full min-h-[10rem] relative">
        <div
            className="w-full max-h-[15rem] min-h-[10rem] bg-fixed overflow-hidden"
            style={{ objectPosition: "bottom" }}
        >
            <StaticImage
                quality={100}
                layout="fullWidth"
                loading="eager"
                style={{minHeight:"10rem"}}
                alt="Spływy kajakowe Tanew"
                title="Spływy kajakowe Tanew"
                durationFadeIn={600}
                src="../images/tło.jpg"
            />
        </div>
        <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
        <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
            <h1 className="uppercase orange_gradient mt-12 text-xl sm:text-2xl md:text-3xl  lg:text-4xl font-bold -tracking-wide">
                Kajakiem po Tanwi Spływy kajakowe Susiec
            </h1>
        </div>
    </section>
);

export default TopImg;