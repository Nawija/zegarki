import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, siteUrl, children }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        siteUrl
                        author
                    }
                }
            }
        `
    );

    const defaultTitle = site.siteMetadata?.title;
    const metaDescription = description || site.siteMetadata.description;
    const canonicalUrl = siteUrl || site.siteMetadata.siteUrl;

    return (
        <>
            <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="seovileo" />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:creator"
                content={site.siteMetadata?.author || `seovileo`}
            />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="msvalidate.01"
                content="EA5601D9EBC3A3E3F1678CF47F3B487F"
            />
            {children}
        </>
    );
}

export default Seo;
