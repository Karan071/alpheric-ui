import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import customerAssetArray from "../customerAssetArray";

export default function Customers() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, -500]);

    // Scroll-based animations for the left side
    const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 1], [50, 0]);

    return (
        <section className="relative w-full h-[200vh] flex items-center justify-center bg-white">
            <div className="w-full max-w-6xl flex">
                {/* Left Side */}
                <div className="w-1/2 flex flex-col justify-center p-10 sticky top-20 h-fit">
                    <h2 className="text-8xl font-semibold">Customers</h2>
                    <ul className="mt-4 text-lg space-y-2">
                        <motion.div
                            style={{ opacity: opacity1, y: y1 }}
                            className="font-semibold flex flex-col gap-2 transition-opacity duration-1000 ease-in-out"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <p className="text-3xl"><span className="text-2xl text-gray-600">01 </span> Visibility & Communication</p>
                                <p className="px-12">Take the assessment and get your career match, personality archetype, and more along the way.</p>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            style={{ opacity: opacity2, y: y2 }}
                            className="opacity-70 transition-opacity duration-500 ease-in-out"
                        >
                            <div>
                                <p className="text-3xl"><span className="text-2xl text-gray-600">02 </span> Operational Prioritization</p>
                                <p className="px-12">Find out what makes you stand apart from others and why certain careers are great fits for you.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            style={{ opacity: opacity3, y: y3 }}
                            className="opacity-70 transition-opacity duration-500 ease-in-out"
                        >
                            <div>
                                <p className="text-3xl"><span className="text-2xl text-gray-600">03</span> Justification & Planning</p>
                                <p className="px-12">Find all the information you need to know about your dream career. Then make a plan to get there.</p>
                            </div>
                        </motion.div>
                    </ul>
                </div>

                {/* Right Side - Sticky Animated Logos */}
                <div className="w-1/2 h-[200vh] sticky top-0 flex items-center justify-center overflow-hidden" ref={ref}>
                    <motion.div style={{ y: translateY }} className="flex flex-col space-y-8">
                        {customerAssetArray.map((customer, index) => (
                            <motion.div
                                key={index}
                                className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center p-4 border border-gray-300 transition-transform duration-300 ease-in-out hover:scale-110"
                            >
                                <img
                                    src={customer.logo}
                                    alt={customer.name}
                                    className="w-14 h-14 object-contain"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
