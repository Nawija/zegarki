import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SmallHero from "../components/SmallHero";

import { FaCrown } from "react-icons/fa";
import { SiCocacola, SiAirbnb, SiNike, SiIbm } from "react-icons/si";

const TechnologiaPremiumPage = () => {
    return (
        <Layout>
            <SmallHero
                title="Technologia Premium"
                desc="GatsbyJS to przyszłość tworzenia stron internetowych."
            />
            <div className="px-3 max-w-screen-xl mx-auto">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <p class="mb-2 font-semibold text-blue-500 md:mb-3 lg:text-lg">
                        Niesamowicie szybkie strony
                    </p>

                    <h2 class="mb-4 text-2xl font-bold text-main md:mb-6 lg:text-3xl">
                        Twoja strona internetowa jest przestarzała
                    </h2>
                    <FaCrown />

                    <p class="max-w-screen-md text-gray-700 md:text-lg mb-6">
                        traci na atrakcyjności. Stoi w miejscu, podczas gdy
                        konkurencja idzie z duchem czasu. Nie możesz sobie
                        pozwolić na stagnację w świecie online.
                    </p>
                    <p class="max-w-screen-md text-gray-700 md:text-lg mb-6">
                        Wprowadzamy technologię premium, która odmieni Twoją
                        stronę internetową. Zamów stronę internetową w GatsbyJS
                        i doświadcz rewolucji, która zapewni Ci przewagę nad
                        konkurencją. Twoja witryna będzie teraz nie tylko
                        piękna, ale także szybka, responsywna i przyjazna dla
                        SEO.
                    </p>
                </div>
                <div class="py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <h2 class="mb-4 text-center text-2xl font-bold text-main md:mb-8 lg:text-3xl">
                            Zaufali
                        </h2>

                        <div class="grid grid-cols-2 gap-6 rounded-lg bg-blue-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-4">
                            <div class="flex items-center justify-center text-blue-500">
                                <SiCocacola className="text-[13rem]" />
                            </div>

                            <div class="flex items-center justify-center text-blue-500">
                                <SiAirbnb className="text-[6rem]" />
                            </div>

                            <div class="flex items-center justify-center text-blue-500">
                                <SiNike className="text-[9rem]" />
                            </div>

                            <div class="flex items-center justify-center text-blue-500">
                                <SiIbm className="text-[9rem]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo title="Technologia Premium GatsbyJS | Seovileo" />
);

export default TechnologiaPremiumPage;
