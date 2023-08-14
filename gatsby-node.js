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
};
