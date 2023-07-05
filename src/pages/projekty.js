import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSecond from "../components/HeroSecond";
import { Link } from "gatsby";

const ProjectsPage = () => {
    return (
        <Layout>
            <HeroSecond />
            <div className="py-4 px-2 bg-white text-sm">
                <div className="max-w-screen-xl mx-auto">
                    <Link to="/" className="px-2 py-2">Strona Główna</Link>
                    <span>/</span>
                    <Link to="/" className="px-2 py-2">Projekty</Link>
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;

export const Head = () => (
    <Seo
        title="Projektowanie i tworzenie stron internetowych | Strony www | CMS"
        description="Przygotuj się na prawdziwą rewolucję w świecie stron www. Usługi projektowania i tworzenia stron internetowych, które przynoszą prawdziwe rezultaty !!"
    />
);
