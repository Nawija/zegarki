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
        autoplay: false,
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
        autoplaySpeed: 3500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
    };

    return (
        <Layout>
            <div className="text-center mt-32">
                <Slider {...settings}>
                    <StaticImage
                        quality={100}
                        draggable="false"
                        className="max-w-screen-2xl mx-auto h-full"
                        src="../images/xx.jpg"
                    />

                    <StaticImage
                        quality={100}
                        draggable="false"
                        className="max-w-screen-2xl mx-auto h-full"
                        src="../images/xx.jpg"
                    />

                    <StaticImage
                        quality={100}
                        draggable="false"
                        className="max-w-screen-2xl mx-auto h-full"
                        src="../images/xx.jpg"
                    />

                    <StaticImage
                        quality={100}
                        draggable="false"
                        className="max-w-screen-2xl mx-auto h-full"
                        src="../images/xx.jpg"
                    />
                </Slider>
            </div>

            <div className="mx-auto max-w-7xl">
                <h1 className="py-6 text-xl text-center font-bold">Where does it come from? - jak powstają soki naturalne?</h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32
                </p>
                <h2 className="py-3">Na czym polega proces tłoczenia soków?</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature
                </p>
                <h2 className="py-3 clq">Tłoczenie soków a wartości odżywcze soku</h2>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature
                </p>
            </div>

            {/* <div className="max-w-7xl mx-auto">
                <Slider
                    className="py-12 text-center max-w-screen-2xl mx-auto"
                    {...settingsCircle}
                >
                    <Link to="/strona-internetowa" className="h-20 w-20">
                        <StaticImage
                            quality={100}
                            draggable="false"
                            className="h-20 w-20"
                            src="https://cdn-icons-png.flaticon.com/128/556/556813.png"
                        />
                        <div className="w-[40px] h-[2px] rounded-2xl mx-auto my-2 bg-green-600" />
                        <p className="font-semibold">Strona Internetowa</p>
                    </Link>

                    <div>
                        <Link to="/hosting" className="h-20 w-20">
                            <StaticImage
                                quality={100}
                                draggable="false"
                                className="h-20 w-20 max-w-screen-2xl rounded-2xl"
                                src="https://cdn-icons-png.flaticon.com/128/2906/2906206.png"
                            />
                            <div className="w-[40px] h-[2px] rounded-2xl mx-auto my-2 bg-green-600" />
                            <p className="font-semibold">Darmowy Hosting</p>
                        </Link>
                    </div>
                    <div>
                        <StaticImage
                            quality={100}
                            draggable="false"
                            className="h-24 w-24 max-w-screen-2xl rounded-2xl"
                            src="https://mebloo.pl/img/gala19_www.jpg"
                        />
                    </div>
                    <div>
                        <StaticImage
                            draggable="false"
                            quality={100}
                            className="h-24 w-24 max-w-screen-2xl rounded-2xl"
                            src="https://mebloo.pl/img/gala19_www.jpg"
                        />
                    </div>

                    <div>
                        <StaticImage
                            quality={100}
                            draggable="false"
                            className="h-24 w-24 max-w-screen-2xl rounded-2xl"
                            src="https://mebloo.pl/img/Ortensiawww.jpg"
                        />
                    </div>

                    <div>
                        <StaticImage
                            quality={100}
                            draggable="false"
                            className="h-24 w-24 max-w-screen-2xl rounded-2xl mx-5"
                            src="https://images.pexels.com/photos/7957758/pexels-photo-7957758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                </Slider>
            </div> */}
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
