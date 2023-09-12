/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "58a9b9cb6a2bbe7f7dcfef995756c8",
            },
        },
        "gatsby-plugin-image",
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `none`,
                },
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-sitemap",
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                showSpinner: false,
                minimum: 0.1,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Seovileo`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `src/images/favicon.jpg`,
            },
        },
    ],
};
