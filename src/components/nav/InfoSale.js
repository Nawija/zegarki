import React from "react";
import { Link } from "gatsby";

import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function InfoSale() {
    return (
        <div className="py-1.5 text-[13px] text-white bg-black relative w-full font-medium">
            <div className="max-w-screen-xl mx-auto flex-b">
                <div className="flex-c">
                    <BsFillMegaphoneFill className="mr-2 text-base"/>
                    PROMO CODE
                </div>
                <Link to="/" className="flex-c space-x-3">
                    <p>SUPORT</p>
                    <FaHeadphonesAlt />
                    <p>+48 570 000 333</p>
                </Link>
            </div>
        </div>
    );
}
