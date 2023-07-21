import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var settingsCircle = {
        centerPadding: "100px",
        dots: true,
        slickPrev: "flex",
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
    };

    return (
        <Layout>
            <Slider className=" bg-gray-200/70 py-12 text-center" {...settings}>
                <StaticImage
                    quality={100}
                    layout="fullWidth"
                    className="max-w-screen-2xl mx-auto rounded-lg"
                    src="https://mebloo.pl/img/dostawa_www_3.jpg"
                />

                <StaticImage
                    quality={100}
                    className="max-w-screen-2xl mx-auto rounded-lg"
                    src="https://mebloo.pl/img/gala19_www.jpg"
                />

                <StaticImage
                    quality={100}
                    className="max-w-screen-2xl mx-auto rounded-lg"
                    src="https://mebloo.pl/img/Ortensiawww.jpg"
                />

                <StaticImage
                    quality={100}
                    className="max-w-screen-2xl mx-auto rounded-lg"
                    src="https://mebloo.pl/img/meblowy_szok_cenowy_nowy.jpg"
                />
            </Slider>
            <Slider
                className="py-12 text-center max-w-screen-2xl mx-auto"
                {...settingsCircle}
            >
                <Link to="/meble" className="rounded-full w-max h-max bg-red-100">
                    <StaticImage
                        quality={100}
                        src="https://cdn-icons-png.flaticon.com/128/5564/5564823.png"
                    />
                </Link>

                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full"
                        src="https://mebloo.pl/img/gala19_www.jpg"
                    />
                </div>

                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full"
                        src="https://mebloo.pl/img/Ortensiawww.jpg"
                    />
                </div>

                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full mx-5"
                        src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>
            </Slider>
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo
        title="Projektowanie i tworzenie stron internetowych | Strony www | CMS"
        description="Przygotuj się na prawdziwą rewolucję w świecie stron www. Usługi projektowania i tworzenia stron internetowych, które przynoszą prawdziwe rezultaty !!"
    />
);
