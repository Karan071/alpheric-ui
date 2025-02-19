// import React from 'react';
// import { motion, useTransform } from 'framer-motion';
// import SolutionTag from './SolutionTag';

// // Variants for text animation: slides from bottom to top with a fade-in
// const textVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 1, ease: 'easeOut' }
//     }
// };

// // Variants for image animation: fade in only
// const imageVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { duration: 0.9, ease: 'easeOut' }
//     }
// };

// const SolutionCard = ({ title, description, imageUrl, tags, scrollYProgress, index }) => {
//     // Image animations
//     const imageOpacity = useTransform(
//         scrollYProgress,
//         [
//             index * 0.25,
//             index * 0.25 + 0.05,
//             (index + 1) * 0.25 - 0.05,
//             (index + 1) * 0.25
//         ],
//         [0, 1, 1, 0]
//     );

//     // Text animations
//     const textY = useTransform(
//         scrollYProgress,
//         [index * 0.25, (index + 1) * 0.25],
//         [100, 0]
//     );

//     const textOpacity = useTransform(
//         scrollYProgress,
//         [
//             index * 0.25,
//             index * 0.25 + 0.05,
//             (index + 1) * 0.25 - 0.05,
//             (index + 1) * 0.25
//         ],
//         [0, 1, 1, 0]
//     );

//     // Tags animation
//     const tagsY = useTransform(
//         scrollYProgress,
//         [index * 0.25, (index + 1) * 0.25],
//         [50, 0]
//     );

//     return (
//         <div className="absolute inset-0 flex items-center top-6">
//             {/* Image Section - Fixed position with fade transition */}
//             <div className="w-1/2 flex justify-center">
//                 <motion.div
//                     style={{ opacity: imageOpacity }}
//                     className="max-w-[350px] md:max-w-[450px] lg:max-w-[594px] h-auto md:h-[600px] lg:h-[700px] object-cover rounded-[36px] shadow-lg"
//                 >
//                     <img
//                         src={imageUrl}
//                         alt={title}
//                         className="h-[700px] object-cover rounded-[36px] shadow-lg"
//                     />
//                 </motion.div>
//             </div>

//             {/* Content Section - Animated text and tags */}
//             <div className="w-1/2 px-10">
//                 <motion.div
//                     style={{
//                         opacity: textOpacity,
//                         y: textY
//                     }}
//                     className="flex flex-col gap-6"
//                 >
//                     {/* Title */}
//                     <h2 className="font-instrument-sans font-semibold text-7xl leading-tight px-3">
//                         {title}
//                     </h2>

//                     {/* Description */}
//                     <p className="font-instrument-sans text-3xl text-gray-600 px-3">
//                         {description}
//                     </p>

//                     {/* Tags */}
//                     {tags && tags.length > 0 && (
//                         <motion.div
//                             style={{ y: tagsY }}
//                             className="flex flex-wrap"
//                         >
//                             {tags.map((tag, tagIndex) => (
//                                 <SolutionTag
//                                     key={tagIndex}
//                                     tagName={tag}
//                                 />
//                             ))}
//                         </motion.div>
//                     )}
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default SolutionCard;
import React from 'react';
import { motion, useTransform } from 'framer-motion';
import SolutionTag from './SolutionTag';

const SolutionCard = ({ title, description, imageUrl, tags, scrollYProgress, index }) => {
    // Image animations
    const imageOpacity = useTransform(
        scrollYProgress,
        [
            index * 0.25,
            index * 0.25 + 0.05,
            (index + 1) * 0.25 - 0.05,
            (index + 1) * 0.25
        ],
        [0, 1, 1, 0]
    );

    // Enhanced text animations with greater upward movement and much slower transition
    const textY = useTransform(
        scrollYProgress,
        [index * 0.25, index * 0.25 + 0.1, (index + 1) * 0.25 - 0.1, (index + 1) * 0.25],
        [100, 0, -200, -300]
    );

    const textOpacity = useTransform(
        scrollYProgress,
        [
            index * 0.25,
            index * 0.25 + 0.05,
            (index + 1) * 0.25 - 0.05,
            (index + 1) * 0.25
        ],
        [0, 1, 1, 0]
    );

    // Tags animation with increased upward movement and much slower transition
    const tagsY = useTransform(
        scrollYProgress,
        [
            index * 0.25,
            index * 0.25 + 0.1,
            (index + 1) * 0.25 - 0.1,
            (index + 1) * 0.25
        ],
        [0, 1, 1, 0]
    );

    return (
        <div className="absolute inset-0 top-10 flex items-center overflow-visible">
            {/* Image Section */}
            <div className="w-1/2 flex justify-center">
                <motion.div
                    style={{ opacity: imageOpacity }}
                    initial={{ scale: 0.9, x: 100 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 30,
                        duration: 2.5
                    }}
                    className="w-full max-w-[594px]"
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-[564px] h-[720px] object-cover rounded-[36px] shadow-lg"
                    />
                </motion.div>
            </div>

            {/* Content Section with enhanced upward scroll animation */}
            <div className="w-1/2 px-12 overflow-visible">
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 30,
                        duration: 2.5
                    }}
                    className="flex flex-col gap-6"
                >
                    {/* Title */}
                    <motion.h2
                        className="font-instrument-sans font-semibold text-7xl leading-tight px-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3, duration: 2 }}
                    >
                        {title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="font-instrument-sans text-3xl text-gray-600 px-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 3, duration: 2 }}
                    >
                        {description}
                    </motion.p>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <motion.div
                            style={{ y: tagsY }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                            className="flex flex-wrap gap-2 mt-4"
                        >
                            {tags.map((tag, tagIndex) => (
                                <motion.div
                                    key={tagIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: 3 + (tagIndex * 0.2),
                                        type: "spring",
                                        stiffness: 60,
                                        damping: 30,
                                        duration: 2.5
                                    }}
                                >
                                    <SolutionTag tagName={tag} />
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default SolutionCard;