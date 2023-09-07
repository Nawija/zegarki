import React from "react";
import Seo from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => {
    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center">
            <p className="font-medium">Upsss...</p>
            <p className="text-4xl text-main text-center font-semibold">
                Error 404
            </p>
            <div className="w-12 bg-blue-500 h-[2px] my-2" />
            <div className=" text-center mt-3">
                <p>Nie znaleziono strony internetowej</p>
            </div>
            <Link to="/" className="btn-main mt-6">
                Strona Główna
            </Link>
        </div>
    );
};

export default NotFoundPage;

export const Head = () => (
    <Seo
        title="Error 404 | Nie znaleziono strony"
        siteUrl="https://seovileo.pl/404"
    />
);
