import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
        tags: [],
    },
    {
        title: "Consult",
        description:
            "Gain clarity with expert advice on strategy, business growth and scaling solutions.",
        imageUrl: Consult,
        tags: ["Technology", "Design", "Cyber Security", "Business Consulting"],
    },
    {
        title: "Build",
        description:
            "Develop solutions tailored to your goals, from robust platforms to seamless integrations.",
        imageUrl: Build,
        tags: ["Mobile", "Web App", "AI & Automation", "Enterprise Application"],
    },
    {
        title: "Design",
        description:
            "Craft stunning, user-friendly experiences that connect with your audience.",
        imageUrl: Design,
        tags: ["Branding", "UX/UI Design", "Concept Design", "Product Design"],
    },
    {
        title: "Host",
        description:
            "Ensure your digital presence is reliable, fast, and secure with premium hosting solutions.",
        imageUrl: Host,
        tags: ["Web Hosting", "Cloud", "Server Management", "AWS", "Google Cloud", "Azure"],
    },
    {
        title: "Market",
        description:
            "Amplify your reach with strategies that drive real results and engage your audience.",
        imageUrl: Market,
        tags: ["Digital Growth", "Organic Marketing", "Media Buying", "Performance Marketing"],
    },
];

const SolutionPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="h-screen flex flex-col font-instrument-sans justify-center items-center">
                <div className="flex align-center items-center text-[140px] text-center font-semibold">
                    What Are We Fighting Against?
                </div>
                <div className="text-gray-500 text-[40px] text-center">
                    Users not engaging with your design or project
                </div>
                <div className="text-gray-500 text-[38px] text-center">
                    Let's turn that challenge into an opportunity.
                </div>
            </div>

            {/* Parallax Section */}
            <Parallax pages={cardsData.length}>
                {cardsData.map((card, index) => (
                    <React.Fragment key={index}>
                        {/* Sticky Image Layer */}
                        <ParallaxLayer
                            offset={index}
                            speed={0}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div className="flex-1 flex justify-center">
                                <img
                                    src={card.imageUrl}
                                    alt={card.title ? `${card.title} illustration` : 'Card illustration'}
                                    className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[594px] h-auto md:h-[600px] lg:h-[700px] object-cover rounded-[36px] shadow-lg"
                                />
                            </div>
                        </ParallaxLayer>

                        {/* Scrolling Text Layer */}
                        <ParallaxLayer
                            offset={index}
                            speed={0.5}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                paddingRight: "10%",
                            }}
                        >
                            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full px-2">
                                {card.title && (
                                    <h1 className="font-instrument-sans font-semibold text-[96px] leading-tight px-2">
                                        {card.title}
                                    </h1>
                                )}
                                {card.description && (
                                    <p className="font-instrument-sans text-[36px] text-gray-600 mt-4 md:mt-6 px-2">
                                        {card.description}
                                    </p>
                                )}
                                {card.tags && card.tags.length > 0 && (
                                    <div className="flex flex-wrap mt-4">
                                        {card.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-gray-200 rounded-full text-sm m-1"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </ParallaxLayer>
                    </React.Fragment>
                ))}
            </Parallax>
        </div>
    );
};

export default SolutionPage;