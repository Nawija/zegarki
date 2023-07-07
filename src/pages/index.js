import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import LiveBackground from "../components/liveBackground"

const IndexPage = () => {
    return (
        <Layout>
        <LiveBackground />
            <div className="bg-gray-950 h-screen w-full"></div>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo
        title="Projektowanie i tworzenie stron internetowych | Strony www | CMS"
        description="Przygotuj się na prawdziwą rewolucję w świecie stron www. Usługi projektowania i tworzenia stron internetowych, które przynoszą prawdziwe rezultaty !!"
    />
);
