import React, { useState } from "react";
import Modal from "react-modal";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Galeria = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsGaleriaa(sort: { position: ASC }) {
                edges {
                    node {
                        img {
                            gatsbyImageData(
                                width: 600
                                placeholder: NONE
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
        data.allDatoCmsGaleriaa.edges.map(
            ({ node }) => node.img
        )
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
        <section className="pt-6 md:py-10 relative">
            <div>
                <p className="p_kayak">Kajakiem Po Tanwi</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    Galeria
                </h2>
                <section className="text-gray-700 body-font">
                    <div className="container px-5 max-w-screen-xl mx-auto">
                        <div className="flex items-center justify-center md:items-start mx-auto flex-wrap sm:mt-6">
                            {data.allDatoCmsGaleriaa.edges.map(({ node }) => (
                                <div
                                    className="xl:w-1/4 md:w-1/3 sm:w-1/2 w-full mx-auto p-3"
                                    key={node.img}
                                >
                                    <button
                                        className="block relative h-56 w-72 md:h-52 md:w-60 rounded overflow-hidden mx-auto"
                                        onClick={() =>
                                            openModal(node.img)
                                        }
                                    >
                                        <GatsbyImage
                                            className="object-cover object-center w-full h-full block"
                                            image={getImage(node.img)}
                                            alt="kajaki tanew"
                                            title="kajaki tanew"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
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
                    style={{ borderRadius: "8px" }}
                    alt="Kajaki Tanew"
                    title="Kajaki Tanew"
                    className="modal-image"
                />
            </Modal>
        </section>
    );
};

export default Galeria;