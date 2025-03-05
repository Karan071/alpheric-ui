import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

import PilotSection from "../../Components/PilotCards"

import pilot1 from '../../assets/Pilot_assets/pilot_asset_1.jpeg'
import pilot2 from '../../assets/Pilot_assets/pilot_asset_2.jpeg'
import pilot3 from '../../assets/Pilot_assets/pilot_asset_3.png'
import pilot4 from '../../assets/Pilot_assets/pilot_asset_4.png'

const pilotCard = [
    {
        title: "Pilot for you",
        subtitle: "Your idea or concept = our solution",
        duration: "2 weeks",
        buttonText: "Book a pilot",
        // onButtonClick: ""
        imageSrc: pilot1
    },
    {
        title: "Pilot for Startups",
        subtitle: "This service aids your tech department in boosting conversations and attracting investments",
        duration: "4 weeks",
        buttonText: "Book a pilot",
        // onButtonClick: function(){},
        imageSrc: pilot2
    },
    {
        title: "Pilot for SMBs",
        subtitle: "Transform your tech ideas into market success. Boost conversations, attract investments",
        duration: "2 weeks",
        buttonText: "Book a pilot",
        // onButtonClick: function(){},
        imageSrc: pilot3
    },
    {
        title: "Pilot for Enterprise",
        subtitle: "Want to test compatibility with your future partner or need a quick solution to a crucial problem?",
        duration: "6 weeks",
        buttonText: "Book a pilot",
        // onButtonClick: function(){},
        imageSrc: pilot4
    },

];


const Pilotpage = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "start center"] });
    const translateY = useTransform(scrollYProgress, [1, 0], [1, 100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.50]);

    return (
        <section ref={sectionRef}>
            <div className="space-y-16">
                <motion.div
                    initial={{ scale: 0.55, x: 0 }}
                    animate={{ y: 50 }}
                    transition={{ ease: "easeInOut" }}
                    className='flex justify-center items-center font-instrument-sans font-semibold text-[140px] px-15 h-screen'
                    style={{ translateY, scale }}
                >
                    Book a Pilot
                </motion.div>

                <div className='flex flex-col gap-6'>
                    {
                        pilotCard.map((pilot, index) => (
                            <div
                                key={index}
                            >
                                <PilotSection
                                    title={pilot.title}
                                    subtitle={pilot.subtitle}
                                    duration={pilot.duration}
                                    buttonText={pilot.buttonText}
                                    imageSrc={pilot.imageSrc}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Pilotpage;
