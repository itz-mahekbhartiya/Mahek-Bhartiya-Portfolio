import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ServiphiOfferLetter from "../assets/ServiphiOfferLetter.jpg";
import ServiphiExperiecnceLetter from "../assets/ServiphiExperienceLetter.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experienceData = [
    {
        id: 1,
        title: "Full Stack Development using MERN",
        company: "ServiPhi Technologies",
        duration: "Jan 2025 – Mar 2025",
        tech: "HTML, CSS, JavaScript, Tailwind, React",
        description: "Developed a responsive banking dashboard and investment portfolio tracker with interactive UI components.",
        images: [ServiphiOfferLetter, ServiphiExperiecnceLetter],
    },
    {
        id: 3,
        title: "Event Coordinator",
        company: "Diploma Institute, Kannad",
        duration: "2019 – 2022",
        tech: "Leadership, Planning",
        description: "Managed events like sports week and annual gathering for 400+ students with seamless execution.",
    },
];

const getTransformOrigin = (xPercent) => {
    if (xPercent < 33) return "left center";
    if (xPercent > 66) return "right center";
    return "center center";
};

const Experience = () => {
    const [showAll, setShowAll] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const closeImageModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    const applyCardEffect = (id, clientX = null, boundingRect = null) => {
        const card = document.getElementById(`exp-card-${id}`);
        const rect = boundingRect || card.getBoundingClientRect();
        const x = clientX !== null ? clientX - rect.left : rect.width / 2;
        const xPercent = (x / rect.width) * 100;
        const origin = getTransformOrigin(xPercent);
        card.style.transition = "background 0.3s ease, transform 0.3s ease";
        card.style.transformOrigin = origin;
        card.style.background = `linear-gradient(to right, rgba(255,255,255,0.15) ${xPercent}%, rgba(31,18,27,1) 100%)`;
    };

    const resetCardEffect = (id) => {
        const card = document.getElementById(`exp-card-${id}`);
        card.style.transition = "background 0.3s ease, transform 0.3s ease";
        card.style.background = "#1f121b";
        card.style.transformOrigin = "center center";
    };

    const handleMouseMove = (e, id) => applyCardEffect(id, e.clientX);
    const handleTouchMove = (e, id) => {
        const touch = e.touches[0];
        const card = document.getElementById(`exp-card-${id}`);
        const rect = card.getBoundingClientRect();
        applyCardEffect(id, touch.clientX, rect);
    };
    const handleMouseLeave = (id) => resetCardEffect(id);
    const handleTouchEnd = (id) => resetCardEffect(id);

    return (
        <div className="min-h-screen bg-[#3a2433] p-4 md:p-10 flex flex-col items-center gap-6">
            <h2 className="skills-heading max-w-[80%] text-xl 2xl:text-4xl text-center break-words">
                <span className="text-white">Portfolio.</span><br className="xl:hidden" />
                <span className="text-[#F0CAA3]">mahekBhartiya<br className="xl:hidden" />
                    (<span className="text-[#C7D9DD] font-semibold">Experience</span>);
                </span>
            </h2>

            {(showAll ? experienceData : experienceData.slice(0, 3)).map((exp) => (
                <motion.div
                    key={exp.id}
                    id={`exp-card-${exp.id}`}
                    onMouseMove={(e) => handleMouseMove(e, exp.id)}
                    onTouchMove={(e) => handleTouchMove(e, exp.id)}
                    onMouseLeave={() => handleMouseLeave(exp.id)}
                    onTouchEnd={() => handleTouchEnd(exp.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.02 }}
                    className="group flex flex-col md:flex-row items-center md:justify-between cursor-pointer rounded-2xl p-4 transition-all duration-300 ease-in-out bg-[#1f121b] text-white shadow-lg hover:shadow-2xl w-full max-w-5xl"
                >
                    <div className="z-10 relative w-full text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm font-semibold text-pink-300">{exp.title}</p>
                        <h2 className="text-lg sm:text-xl font-bold my-1">{exp.company}</h2>
                        <p className="text-sm text-gray-300"><span className="text-pink-300">Duration:</span> {exp.duration}</p>
                        <p className="text-sm text-gray-300"><span className="text-pink-300">Tech Used:</span> {exp.tech}</p>
                        <p className="text-sm text-gray-300"><span className="text-pink-300">Description:</span> {exp.description}</p>
                    </div>

                    {exp.images && exp.images.length > 0 && (
                        <div className="w-full md:w-1/2 mt-4 md:mt-0">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                className="rounded-lg overflow-hidden"
                            >
                                {exp.images.map((imgSrc, index) => (
                                    <SwiperSlide key={index} className="flex items-center justify-center bg-[#1f121b]">
                                        <img
                                            src={imgSrc}
                                            alt={`Proof ${index + 1}`}
                                            className="w-full h-60 object-contain rounded-xl cursor-pointer"
                                            onClick={() => openImageModal(imgSrc)}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}

                </motion.div>
            ))}

            <div className="text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-pink-600 text-white py-2 px-4 rounded-xl transition duration-300 hover:bg-pink-800"
                >
                    {showAll ? "View Less Experience" : "View More Experience"}
                </button>
            </div>

            {/* Image Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
                    onClick={closeImageModal}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-4xl w-[90%] max-h-[90vh] overflow-auto bg-[#1f121b] rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Zoomed Image"
                            className="w-full object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-xl bg-pink-600 p-2 rounded-full hover:bg-pink-800"
                            onClick={closeImageModal}
                        >
                            ✕
                        </button>
                    </motion.div>

                </div>
            )}
        </div>
    );
};

export default Experience;
