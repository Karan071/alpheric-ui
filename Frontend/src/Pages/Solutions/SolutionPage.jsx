import React from "react";
import { motion } from "framer-motion";
import SolutionCard from "../../Components/SolutionCard";

// Images imports
import Business from "../../assets/Solutions/Business.jpg";
import Consult from "../../assets/Solutions/Consult.jpg";
import Build from "../../assets/Solutions/Build.jpg";
import Design from "../../assets/Solutions/Design.jpg";
import Host from "../../assets/Solutions/Host.jpg";
import Market from "../../assets/Solutions/Market.jpg";

const cardsData = [
    {
        title: "Your Business, Simplified",
        description:
            "We’re here to handle it all so you can focus on what matters most.",
        imageUrl: Business,
    },
    {
        title: "Consult",
        description:
            "Gain clarity with expert advice on strategy, business growth and scaling solutions.",
        imageUrl: Consult,
    },
    {
        title: "Build",
        description:
            "Develop solutions tailored to your goals, from robust platforms to seamless integrations.",
        imageUrl: Build,
    },
    {
        title: "Design",
        description:
            "Craft stunning, user-friendly experiences that connect with your audience.",
        imageUrl: Design,
    },
    {
        title: "Host",
        description:
            "Ensure your digital presence is reliable, fast, and secure with premium hosting solutions.",
        imageUrl: Host,
    },
    {
        title: "Market",
        description:
            "Amplify your reach with strategies that drive real results and engage your audience.",
        imageUrl: Market,
    },
];

const SolutionPage = () => {
    return (
        <div className="relative space-y-12 px-4 overflow-hidden">
            {cardsData.map((card, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <SolutionCard {...card} />
                </motion.div>
            ))}

        </div>

    );
};

export default SolutionPage;
