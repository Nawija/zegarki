import React from "react";

import InfoSale from "../components/nav/InfoSale";
import MobileNav from "../components/nav/MobileNav";
import DesktopNav from "../components/nav/DesktopNav";

const Header = () => {
    return (
        <>
            <InfoSale />
            <MobileNav />
            <DesktopNav />
        </>
    );
};

export default Header;
