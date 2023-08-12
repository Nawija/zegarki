import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const TopImg = () => {
    return (
        <section className="mt-16 lg:mt-32 relative">
            <StaticImage
                className="hidden lg:block"
                loading="eager"
                quality={100}
                src="../images/tło.jpg"
                alt="lancuckiesady"
            />
        </section>
    );
};

export default TopImg;
