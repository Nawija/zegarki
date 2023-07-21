import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    var settingsCircle = {
        centerPadding: "100px",
        dots: true,
        slickPrev: 'flex',
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        arrows:true,
        slidesToScroll: 1,
    };

    return (
        <Layout>
            <Slider className=" bg-gray-200/70 py-12 text-center" {...settings}>
                <StaticImage
                    quality={100}
                    className="h-96 max-w-screen-2xl mx-auto rounded-lg"
                    src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />

                <StaticImage
                    quality={100}
                    className="h-96 max-w-screen-2xl mx-auto rounded-lg"
                    src="../images/tło.jpg"
                />

                <StaticImage
                    quality={100}
                    className="h-96 max-w-screen-2xl mx-auto rounded-lg"
                    src="../images/tło.jpg"
                />

                <StaticImage
                    quality={100}
                    className="h-96 max-w-screen-2xl mx-auto rounded-lg"
                    src="../images/tło.jpg"
                />
            </Slider>
            <Slider
                className="py-12 text-center max-w-screen-2xl mx-auto"
                {...settingsCircle}
            >
                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full"
                        src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>

                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full"
                        src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                </div>

                <div>
                    <StaticImage
                        quality={100}
                        className="h-40 w-40 max-w-screen-2xl rounded-full"
                        src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
