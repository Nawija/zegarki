import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = () => {
    return (
            <StaticImage
                className="min-h-[11rem] w-full"
                width={1500}
                height={300}
                loading="eager"
                quality={100}
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="tło"
            />
    );
};

export default TopImg;
