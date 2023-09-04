import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SmallHero from "../components/SmallHero";
import GaleriaImg from "../components/GaleriaImg";

const Galeria = () => {
    return (
        <Layout>
            <SmallHero title="Galeria" />
            <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-start max-w-screen-xl mx-auto">
                <GaleriaImg />
                <div className="w-full lg:w-[25%] my-10 lg:my-0 text-start px-4">
                    <div className="border-2 border-yellow-400 mt-2 p-5 rounded-lg mb-6">
                        <p className="font-bold text-main">Dołacz do nas:</p>
                        <div className="space-x-3 my-1">
                            <Link target="_blank" aria-label="Facebook">
                                <StaticImage
                                    alt="facebook"
                                    title="facebook"
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../images/facebook.png"
                                />
                            </Link>
                            <Link target="_blank" aria-label="Instagram">
                                <StaticImage
                                    alt="instagram"
                                    title="instagram"
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../images/instagram.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="border-2 shadow-xl p-4 rounded-lg bg-gradient-to-bl from-yellow-400 to-yellow-600">
                        <p className="font-semibold text-white">
                            Obsługujemy klientów indywidualnych jak i grupy
                            zorganizowane
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Galeria | Seovileo" />;

export default Galeria;
