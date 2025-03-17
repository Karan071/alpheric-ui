import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PilotSection from "../../Components/PilotCards";

import pilot1 from "../../assets/Pilot_assets/pilot_asset_1.jpeg";
import pilot2 from "../../assets/Pilot_assets/pilot_asset_2.jpeg";
import pilot3 from "../../assets/Pilot_assets/pilot_asset_3.png";
import pilot4 from "../../assets/Pilot_assets/pilot_asset_4.png";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Pilotpage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const pilotCards = [
        {
            title: "Pilot for You",
            subtitle: "Your idea or concept = our solution.",
            duration: "2 weeks",
            buttonText: "Book a pilot",
            imageSrc: pilot1,
        },
        {
            title: "Pilot for Startups",
            subtitle:
                "This service aids your tech department in boosting conversions and attracting investments.",
            duration: "4 weeks",
            buttonText: "Book a pilot",
            imageSrc: pilot2,
        },
        {
            title: "Pilot For SMBs",
            subtitle:
                "Transform your tech ideas into market success. Boost conversions, attract investment.",
            duration: "4 weeks",
            buttonText: "Book a pilot",
            imageSrc: pilot3,
        },
        {
            title: "Pilot for Enterprise",
            subtitle:
                "Want to test compatibility with your future partner or need a quick solution to a crucial problem?",
            duration: "6 weeks",
            buttonText: "Book a pilot",
            imageSrc: pilot4,
        },
    ];

    const cardVariants = {
        hidden: (custom) => ({
            rotateY: custom >= currentIndex ? 45 : -45,
            scale: 0.8,
            y: custom >= currentIndex ? 100 : -100,
            opacity: 0,
            z: -200,
        }),
        visible: (custom) => ({
            rotateY: 0,
            scale: 1 - Math.abs(custom - currentIndex) * 0.1,
            y: (custom - currentIndex) * 50,
            opacity: 1 - Math.abs(custom - currentIndex) * 0.2,
            z: -Math.abs(custom - currentIndex) * 100,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.8,
            },
        }),
        exit: (custom) => ({
            rotateY: custom >= currentIndex ? -45 : 45,
            scale: 0.2,
            y: custom >= currentIndex ? -100 : 100,
            opacity: 0,
            z: -200,
            transition: {
                duration: 0.5,
            },
        }),
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-white py-0 relative overflow-hidden">
            <div className="flex justify-center items-center font-instrument-sans text-4xl md:text-[120px] font-semibold px-4 text-center">
                Book a Pilot
            </div>

            <div className="relative h-[600px] md:h-[800px] w-full perspective-2000 mb-6">
                <AnimatePresence mode="wait">
                    {pilotCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className="absolute inset-0 flex items-center justify-center w-full cursor-pointer"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            style={{
                                transformStyle: "preserve-3d",
                                zIndex: pilotCards.length - Math.abs(currentIndex - index),
                            }}
                            onClick={() => setCurrentIndex(index)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <PilotSection
                                title={card.title}
                                subtitle={card.subtitle}
                                duration={card.duration}
                                buttonText={card.buttonText}
                                imageSrc={card.imageSrc}
                                onButtonClick={(e) => {
                                    e.stopPropagation();
                                    console.log(`${card.title} button clicked`);
                                }}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>

                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
                    <motion.button
                        className="text-black bg-white/80 p-2 rounded-full hover:bg-[#56c8dc] hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            setCurrentIndex(
                                (prev) => (prev - 1 + pilotCards.length) % pilotCards.length
                            )
                        }
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    
                    {pilotCards.map((_, index) => (
                        <motion.button
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#56c8dc]" : "bg-black"
                                }`}
                            whileHover={{ scale: 0.7 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                    
                    <motion.button
                        className="text-black bg-white/80 p-2 rounded-full hover:bg-[#56c8dc] hover:text-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                            setCurrentIndex((prev) => (prev + 1) % pilotCards.length)
                        }
                    >
                        <ChevronRight size={24} />
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Pilotpage;