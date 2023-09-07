const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryProducts = await graphql(`
        {
            allDatoCmsProjekty {
                nodes {
                    slug
                }
            }
        }
    `);

    const projektyTemp = path.resolve(`./src/templates/projektyTemp.js`);

    queryProducts.data.allDatoCmsProjekty.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `${slug}`,
            component: projektyTemp,
            context: {
                slug,
            },
        });
    });

    const queryBlog = await graphql(`
        {
            allDatoCmsBlog {
                nodes {
                    slug
                }
            }
        }
    `);

    const blogTemp = path.resolve(`./src/templates/blogTemp.js`);

    queryBlog.data.allDatoCmsBlog.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `blog/${slug}`,
            component: blogTemp,
            context: {
                slug,
            },
        });
    });
};
