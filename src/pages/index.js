import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import {
    HeroSlide,
    NewItems,
    TextInfoSection,
    HugoBoss,
} from "../components";

const IndexPage = () => {
    return (
        <Layout>
            <HeroSlide />
            <NewItems />
            <TextInfoSection />
            <HugoBoss />
            <HugoBoss />
            <HugoBoss />

        </Layout>
    );
};

export default IndexPage;

export const Head = () => <Seo title="PREMWATCH" description="Premwatch" />;
