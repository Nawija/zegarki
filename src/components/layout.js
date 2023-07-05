import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <div className="relative text-base max-w-[2000px] mx-auto">
            <Header siteTitle={data.site.siteMetadata?.title || `Seovileo`} />
            <main className="w-full overflow-hidden min-h-screen">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
