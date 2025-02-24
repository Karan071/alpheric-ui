// const Customer = () => {
//     return (
//         <section className="font-instrument-sans h-screen flex">
//             <div className="px-[120px] w-1/2">
                

//                 <h1 className="text-7xl font-bold p-2 m-1">Customers</h1>
//                 <div className="px-10 py-12 flex flex-col justify-center Justification & Planningitems-center gap-6 m-3 ">
//                     <div className="flex flex-col justify-center items-center gap-4">
//                         <h2 className="flex justify-center items-center gap-2 text-5xl"> <span>01</span> Visibility & Communication</h2>
//                         <p className="text-xl px-7">Take the assessment and get your career matches, personality archetype, and more along the way.</p>
//                     </div>
//                     <div className="flex flex-col justify-center items-center gap-4">
//                         <h2 className="flex justify-center items-center gap-2 text-5xl"><span>02</span> Operational Prioritization</h2>
//                         <p className="text-xl px-7">Find out what makes you stand apart from others and why certian careers are great fits for you.</p>
//                     </div>
//                     <div className="flex flex-col justify-center items-center gap-4">
//                         <h2 className="flex justify-center items-center gap-2 text-5xl"><span>03</span> Justification & Planning</h2>
//                         <p className="text-xl px-7">Take all the information you need to know about your dream career. Than make a plan to get there.</p>
//                     </div>
//                 </div>
//             </div>
//             {/* Right  */}
//             <div className="w-1/2 m-9 p-2">
//                 <div className="flex flex-col justify-center items-center gap-5">
//                     {/* first row */}
//                     <div className="flex justify-center gap-8">
//                         <div className="flex gap-8">
//                             <div className="bg-red-500 w-20 h-20 rounded-full " />
//                             <div className="bg-red-700 w-20 h-20 rounded-full " />
//                         </div>
//                         <div className="flex justify-center gap-8">
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                         </div>
//                     </div>
//                     <div className="flex justify-center gap-8">
//                         <div className="flex gap-8">
//                             <div className="bg-red-500 w-20 h-20 rounded-full " />
//                             <div className="bg-red-700 w-20 h-20 rounded-full " />
//                         </div>
//                         <div className="flex justify-center gap-8">
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                         </div>
//                     </div>
//                     <div className="flex justify-center gap-8">
//                         <div className="flex gap-8">
//                             <div className="bg-red-500 w-20 h-20 rounded-full " />
//                             <div className="bg-red-700 w-20 h-20 rounded-full " />
//                         </div>
//                         <div className="flex justify-center gap-8">
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                             <div className="w-10 h-10 bg-red-800 rounded-full" />
//                         </div>
//                     </div>

//                     <div>

//                     </div>

//                     <div></div>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Customer;
import { motion } from "framer-motion";

const Customer = () => {
    return (
        <section className="font-instrument-sans h-screen flex overflow-hidden">
            {/* Left Side - Sticky */}
            <div className="px-[120px] w-1/2 h-screen sticky top-0 flex flex-col justify-center">
                <h1 className="text-7xl font-bold p-2 m-1">Customers</h1>
                <div className="px-10 py-12 flex flex-col justify-center items-center gap-10 m-3">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h2 className="flex justify-center items-center gap-5 text-5xl"> <span>01</span> Visibility & Communication</h2>
                        <p className="text-xl px-7">Take the assessment and get your career matches, personality archetype, and more along the way.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h2 className="flex justify-center items-center gap-2 text-5xl"><span>02</span> Operational Prioritization</h2>
                        <p className="text-xl px-7">Find out what makes you stand apart from others and why certain careers are great fits for you.</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h2 className="flex justify-center items-center gap-2 text-5xl"><span>03</span> Justification & Planning</h2>
                        <p className="text-xl px-7">Take all the information you need to know about your dream career. Then make a plan to get there.</p>
                    </div>
                </div>
            </div>
            {/* Right Side - Scrollable with Framer Motion */}
            <motion.div 
                className="w-1/2 p-9 overflow-y-auto" 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col justify-center items-center gap-5">
                    {/* Rows of circles */}
                    {[...Array(9)].map((_, rowIndex) => (
                        <motion.div 
                            key={rowIndex} 
                            className="flex justify-center gap-8"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="flex gap-8">
                                <div className="bg-red-500 w-20 h-20 rounded-full" />
                                <div className="bg-red-700 w-20 h-20 rounded-full" />
                            </div>
                            <div className="flex justify-center gap-8">
                                <div className="w-10 h-10 bg-red-800 rounded-full" />
                                <div className="w-10 h-10 bg-red-800 rounded-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Customer;
