import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const TopImg = () => {
    return (
        <section className="mt-16 lg:mt-32 relative">
            <StaticImage
                loading="eager"
                quality={100}
                src="../images/tło.jpg"
                alt="lancuckiesady"
            />
        </section>
    );
};

export default TopImg;
