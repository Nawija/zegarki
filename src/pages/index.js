import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSlide from "../components/HeroSlide";
import NewItems from "../components/NewItems";

const IndexPage = () => {
    return (
        <Layout>
            <HeroSlide />
            <NewItems />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="Premwatch" description="Premwatch" />;
