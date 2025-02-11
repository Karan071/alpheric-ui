import React from 'react';

const SolutionCard = ({ title, description, imageUrl }) => {
    return (
        <div className="font-urbanist flex flex-col md:flex-row items-center p-6 md:p-12 max-w-6xl mx-auto gap-12 md:gap-16 lg:gap-24">

            {/* Image Section */}
            {imageUrl && (
                <div className="flex-1 flex justify-center">
                    <img
                        src={imageUrl}
                        alt={title ? `${title} illustration` : 'Card illustration'}
                        className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[594px] h-auto md:h-[600px] lg:h-[700px] object-cover rounded-[36px] shadow-lg"
                    />
                </div>
            )}

            {/* Information Section */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
                {title && (
                    <h1 className="font-sans font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="font-sans text-lg md:text-2xl lg:text-3xl text-gray-600 mt-4 md:mt-6">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

export default SolutionCard;

// import React from "react";
// import Buttons from "../Components/Buttons";

// const SolutionCard = ({ title, description, imageUrl, buttonLabel, onButtonClick }) => {
//     return (
//         <div className="font-urbanist flex flex-col md:flex-row items-center p-6 md:p-12 max-w-6xl mx-auto gap-12 md:gap-16 lg:gap-24">

//             {/* Image Section */}
//             {imageUrl && (
//                 <div className="flex-1 flex justify-center">
//                     <img
//                         src={imageUrl}
//                         alt={title ? `${title} illustration` : 'Card illustration'}
//                         className="w-full max-w-[500px] md:max-w-[550px] lg:max-w-[594px] h-auto md:h-[700px] lg:h-[800px] object-cover rounded-[36px] shadow-lg"
//                     />
//                 </div>
//             )}

//             {/* Information Section */}
//             <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full">
//                 {title && (
//                     <h1 className="font-sans font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight">
//                         {title}
//                     </h1>
//                 )}
//                 {description && (
//                     <p className="font-sans text-lg md:text-2xl lg:text-3xl text-gray-600 mt-4 md:mt-6">
//                         {description}
//                     </p>
//                 )}
//                 {/* Button Section */}
//                 {buttonLabel && (
//                     <Buttons label={buttonLabel} onClick={onButtonClick} className="mt-6 md:mt-8 px-6 py-3 text-lg border-2" />
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SolutionCard;
