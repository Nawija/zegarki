/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: ``,
        description: ``,
        author: `lancuckiesady`,
        siteUrl: `http://lancuckiesady.com/`,
    },
    plugins: [
        {
            resolve: "gatsby-source-datocms",
            options: {
                apiToken: "40962a45d588d6f2de56ad9ba2ed83",
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
                showSpinner: true,
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
