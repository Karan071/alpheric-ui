// import React from "react";
// import { motion } from "framer-motion";

// const slideVariants = {
//     enter: {
//         y: 100,
//         opacity: 0,
//     },
//     center: {
//         y: 0,
//         opacity: 1,
//     },
//     exit: {
//         y: -100,
//         opacity: 0,
//     },
// };

// const QuestionnaireCard = ({ question, stepNumber, totalSteps, onAnswer }) => {
//     return (
//         <motion.div
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ y: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
//             className="relative w-full max-w-[700px] font-instrument-sans"
//         >
//             <div className="relative bg-white w-[673px] h-[353px] p-8 rounded-3xl shadow-2xl overflow-hidden gap-8 ">
//                 {question.type !== "special" ? (
//                     <>
//                         <div className="flex items-center justify-center gap-6 mb-10">
//                             {Array.from({ length: totalSteps }, (_, index) => (
//                                 <div
//                                     key={index + 1}
//                                     className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-medium
//                                         ${index + 1 === stepNumber ? "border-black" : "border-gray-300 text-gray-300"}`}
//                                 >
//                                     {index + 1}
//                                 </div>
//                             ))}
//                         </div>
//                         <h2 className="text-center text-3xl font-medium mb-12 px-4">
//                             {question.text}
//                         </h2>
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={() => onAnswer("no")}
//                                 className="absolute -left-2 -bottom-5 bg-black text-white p-8 text-2xl rounded-full font-medium hover:bg-[#56c8dc]"
//                             >
//                                 No
//                             </button>
//                             <button
//                                 onClick={() => onAnswer("yes")}
//                                 className="absolute -right-3 -bottom-5 bg-black text-white p-8 text-2xl rounded-full font-medium hover:bg-[#56c8dc]"
//                             >
//                                 Yes
//                             </button>
//                         </div>
//                     </>
//                 ) : (
//                     <div className="text-center">
//                         <div className="inline-block px-4 py-1 rounded-full bg-white border text-gray-600 mb-8 font-semibold text-lg">
//                             Insights
//                         </div>
//                         <h2 className="text-4xl font-bold mb-4 px-4">
//                             {question.text}
//                         </h2>
//                         <p className="text-4xl font-bold mb-4 px-4">
//                             {question.subText}
//                         </p>
//                         <button
//                             onClick={() => onAnswer("view")}
//                             className="bg-black text-white text-2xl px-9 py-11 rounded-full hover:bg-[#56c8dc] transition-colors absolute -bottom-10 -translate-x-1/2"
//                         >
//                             View
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </motion.div>
//     );
// };

// export default QuestionnaireCard;


// Dummy stacked cards 
import React from "react";
import { motion } from "framer-motion";

const slideVariants = {
    initial:{
        y:-100,
        opacity:0,
    },
    enter: {
        y: -100,
        opacity: 0,
    },
    center: {
        y: 50,
        opacity: 1,
    },
    exit: {
        y: 100,
        opacity: 0,
    },
};

const QuestionnaireCard = ({ question, stepNumber, totalSteps, onAnswer }) => {
    return (
        <motion.div
            variants={slideVariants}
            initial="initial"
            animate="center"
            exit="exit"
            transition={{
                y: { type: "spring", stiffness: 100, damping: 30 },
                opacity: { duration: 0.2 },
            }}
            className="relative w-full max-w-[691px] font-instrument-sans flex justify-center items-center">

            {/* Main Card */}
            <div className="relative border border-gray-300 bg-white w-[671px] h-[289px] p-4 rounded-[24px] shadow-sm overflow-hidden gap-8  font-instrument-sans">
                {question.type !== "special" ? (
                    <>
                        {/* Step Indicators */}
                        <div className="flex items-center justify-center gap-4 mb-5 mt-5 font-[20px]">
                            {Array.from({ length: totalSteps }, (_, index) => (
                                <div
                                    key={index + 1}
                                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-medium
                                        ${
                                            index + 1 === stepNumber
                                                ? "border-black"
                                                : "border-gray-300 text-gray-300"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                            ))}
                        </div>

                        {/* Question Text */}
                        <h2 className="text-center text-[32px] font-medium mb-3 px-4">
                            {question.text}
                        </h2>

                        {/* Answer Buttons */}
                        <div className="flex justify-between">
                            <button
                                onClick={() => onAnswer("no")}
                                className="absolute -left-2 -bottom-5 bg-black text-white p-7 text-[24px] rounded-full font-medium hover:bg-[#56c8dc] shadow-lg font-instrument-sans transition duration-500"
                            >
                                No
                            </button>
                            <button
                                onClick={() => onAnswer("yes")}
                                className="absolute -right-3 -bottom-5 bg-black text-white p-7 text-[24px] rounded-full font-medium hover:bg-[#56c8dc] shadow-lg font-instrument-sans transition duration-500"
                            >
                                Yes
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="text-center px-7">
                        <div className="inline-block px-4 rounded-full bg-white border text-gray-600 mb-2 font-medium text-[20px] mt-4">
                            Insights
                        </div>
                        <h2 className="text-[32px] font-bold">
                            {question.text}
                        </h2>
                        <button
                            onClick={() => onAnswer("view")}
                            className="bg-black text-white text-[24px] px-4 py-6 rounded-full hover:bg-[#56c8dc] transition-colors absolute -bottom-7 -translate-x-1/2 shadow-lg duration-600"
                        >
                            View
                        </button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default QuestionnaireCard;