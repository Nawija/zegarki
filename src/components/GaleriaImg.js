import React, { useState } from "react";
import Modal from "react-modal";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Galeria = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsGaleriaa {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                width: 700
                                placeholder: BLURRED
                                layout: CONSTRAINED
                            )
                        }
                    }
                }
            }
        }
    `);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [galleryImages] = useState(
        data.allDatoCmsGaleriaa.edges.map(({ node }) => node.img)
    );
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (image) => {
        setSelectedImage(image);
        setCurrentImageIndex(galleryImages.indexOf(image));
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [zoomFactor, setZoomFactor] = useState(1);
    const handleZoomButtonClick = () => {
        setZoomFactor((prevZoom) => prevZoom + 0.3);
    };
    const handleUnZoomButtonClick = () => {
        setZoomFactor(prevZoom => Math.max(prevZoom - 0.3, 1));
    };

    const goToNextImage = () => {
        const newIndex = (currentImageIndex + 1) % galleryImages.length;
        setSelectedImage(galleryImages[newIndex]);
        setCurrentImageIndex(newIndex);
    };

    const goToPreviousImage = () => {
        const newIndex =
            (currentImageIndex - 1 + galleryImages.length) %
            galleryImages.length;
        setSelectedImage(galleryImages[newIndex]);
        setCurrentImageIndex(newIndex);
    };

    return (
        <section className="pb-4 relative">


                    <div className="max-w-screen-2xl mx-auto">
                        <div className="flex flex-wrap w-full ml-auto sm:mt-6">
                            {data.allDatoCmsGaleriaa.edges.map(({ node }) => (
                                <div className=" mx-auto py-0.5" key={node.img}>
                                    <button onClick={() => openModal(node.img)}>
                                        <div className="relative h-56 w-72 md:h-52 md:w-60 mx-auto group rounded-md overflow-hidden">
                                            <GatsbyImage
                                                className="w-full h-full"
                                                image={getImage(node.img)}
                                                alt="łancuckie sady"
                                                title="łancuckie sady"
                                            />
                                            <div className="bg-black/40 absolute inset-0 flex items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 ">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="icon icon-tabler icon-tabler-zoom-in"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="white"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                        fill="none"
                                                    ></path>
                                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                                    <path d="M7 10l6 0"></path>
                                                    <path d="M10 7l0 6"></path>
                                                    <path d="M21 21l-6 -6"></path>
                                                </svg>
                                                <p className="text-white">
                                                    Zobacz
                                                </p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>



            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Zdjęcie"
                className="modal"
                overlayClassName="overlay"
            >
                <button className="close-button" onClick={closeModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
                <button className="zoom-button" onClick={handleZoomButtonClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-zoom-in"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M7 10l6 0"></path>
                        <path d="M10 7l0 6"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                </button>
                <button
                    className="unzoom-button"
                    onClick={handleUnZoomButtonClick}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-zoom-in"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                        <path d="M7 10l6 0"></path>
                        <path d="M21 21l-6 -6"></path>
                    </svg>
                </button>
                <button className="prev-button" onClick={goToPreviousImage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-left"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M15 6l-6 6l6 6"></path>
                    </svg>
                </button>
                <button className="next-button" onClick={goToNextImage}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-chevron-right"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                        ></path>
                        <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                </button>
                <GatsbyImage
                    image={getImage(selectedImage)}
                    alt="lancuckie sady"
                    title="lancuckie sady"
                    className="modal-image"
                    style={{ transform: `scale(${zoomFactor})` }}
                />
            </Modal>
        </section>
    );
};

export default Galeria;
