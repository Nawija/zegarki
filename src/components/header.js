import React from "react";

import MobileNav from "../components/nav/MobileNav";
import DesktopNav from "../components/nav/DesktopNav";

const Header = () => {
    return (
        <>
            <MobileNav />
            <DesktopNav />
        </>
    );
};

export default Header;
