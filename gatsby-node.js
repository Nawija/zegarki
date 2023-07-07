const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryProjects = await graphql(`
        {
            allDatoCmsProjekty {
                nodes {
                    slug
                }
            }
        }
    `);

    const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`);

    queryProjects.data.allDatoCmsProjekty.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: `/projekty/${slug}`,
            component: projectTemplate,
            context: {
                slug,
            },
        });
    });
};
