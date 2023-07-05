import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
    return (
        <Layout>
            <p>hello 404</p>
        </Layout>
    );
};

export default NotFoundPage;

export const Head = () => (
    <Seo
        title="Nie znaleziono strony | Error 404 | Seovileo.pl"
        siteUrl="https://seovileo.pl/404"
    />
);
