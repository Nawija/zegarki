const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryProducts = await graphql(`
        {
            allDatoCmsProdukty {
                nodes {
                    slug
                }
            }
        }
    `);

    const produktyTemp = path.resolve(`./src/templates/produktyTemp.js`);

    queryProducts.data.allDatoCmsProdukty.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `${slug}`,
            component: produktyTemp,
            context: {
                slug,
            },
        });
    });
};
