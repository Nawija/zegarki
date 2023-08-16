import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = ({ headh1 }) => {
    return (
        <div className="w-full relative mb-6">
            <StaticImage
                width={1500}
                height={300}
                loading="eager"
                quality={100}
                className="min-h-[11rem]"
                imgClassName="h-full w-full"
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="tło"
            />
            <h1 className="text-2xl font-semibold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {headh1}
            </h1>
        </div>
    );
};

export default TopImg;
