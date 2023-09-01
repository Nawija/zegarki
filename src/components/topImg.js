import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = ({ headh1, bgColor }) => {
    return (
        <div className="w-full relative text-center mb-6 max-w-screen-2xl mx-auto overflow-hidden rounded-b-lg">
            <StaticImage
                width={1536}
                height={300}
                loading="eager"
                placeholder="dominantColor"
                quality={100}
                className="min-h-[11rem] opacity-90"
                imgClassName="h-full w-full"
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="tło"
            />
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                {headh1}
            </p>
            <div
                className={`absolute top-0 left-0 h-full w-full opacity-20`}
                style={{
                    background: `${bgColor}`,
                }}
            />
        </div>
    );
};

export default TopImg;
