import React from "react";

const PilotCards = ({
    title = "Pilot for You",
    subtitle = "Your idea or concept = our solution.",
    duration = "2 weeks",
    buttonText = "Book a pilot",
    onButtonClick,
    imageSrc,
}) => {
    return (
        <div className="relative w-full h-[550px] flex justify-center overflow-hidden">

            <div className="absolute inset-0 left-14 right-14 h-full rounded-[32px] overflow-hidden">
                <img
                    src={imageSrc}
                    alt="Pilot Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div> {/* Dark Overlay */}
            </div>


            <div className="relative h-full flex items-center px-30 max-w-7xl mx-auto w-full">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-xl text-gray-300 mb-8">{subtitle}</p>

                    {/* Duration & Button Section */}
                    <div className="flex items-center bg-[#001B3B]/50 px-6 py-3 rounded-full w-fit">
                        <span className="text-white flex items-center mr-4">
                            {duration} 📅
                        </span>

                        <button
                            onClick={onButtonClick}
                            className="bg-white text-[#3f6088] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PilotCards;