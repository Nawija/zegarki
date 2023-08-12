import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const Produkty = () => {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsProdukty(sort: { position: ASC }) {
                edges {
                    node {
                        slug
                        title
                        price
                        img {
                            gatsbyImageData(height: 300, width: 200)
                        }
                    }
                }
            }
        }
    `);
    return (
        <Layout>
            <TopImg />
            <div className="sm:my-6 lg:my-20 max-w-screen-xl mx-auto">
                <h1 className="ml-8 font-medium mb-3 mt-3 text-lg">
                    Nasze Produkty z Jabłek:
                </h1>
                <div className="flex flex-wrap ">
                    {data.allDatoCmsProdukty.edges.map(({ node }) => (
                        <div className="relative mx-auto">
                            <Link
                                to={"/" + node.slug}
                                className="py-3 flex items-center justify-center flex-col"
                            >
                                <GatsbyImage
                                    className="w-[94%] mx-auto"
                                    imgClassName="w-[94%]"
                                    image={getImage(node.img)}
                                    alt="lancuckie sady"
                                />
                                <div className="flex items-center justify-between py-2 w-[94%] mx-auto">
                                    <p className="font-medium text-sm capitalize">
                                        {node.title}
                                    </p>
                                    <p className="font-medium text-sm text-red-600">
                                        {node.price}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Produkty Łancuckie Sady" />;

export default Produkty;
