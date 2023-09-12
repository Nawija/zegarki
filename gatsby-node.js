const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryShowProduct = await graphql(`
        {
            allDatoCmsHugoBoss {
                nodes {
                    slug
                }
            }
        }
    `);

    const ShowProduct = path.resolve(`./src/templates/ShowProduct.js`);

    queryShowProduct.data.allDatoCmsHugoBoss.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `${slug}`,
            component: ShowProduct,
            context: {
                slug,
            },
        });
    });
};
