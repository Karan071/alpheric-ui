import React from 'react'
import { MoveRight } from 'lucide-react'
import girl from "../assets/girls.png"
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className='min-h-screen w-full flex items-center justify-start px-[116px]'>
            <motion.div

                className='w-full max-w-4xl font-instrument-sans leading-tight'>
                <h3 className='text-[40px]'>Shall we chat?</h3>
                <h1 className='text-[64px] font-bold mb-30 hover:underline underline-offset-8 decoration-3 '>hello@alpheric.com</h1>
                <div className='flex items-center hover:underline underline-offset-8 decoration-4 font-semibold mb-30 gap-3'>
                    <span className='text-[140px]'>Let’s</span>
                    <motion.p
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        whileInView={{
                            clipPath: 'inset(0 0 0 0)',
                            transition: { duration: 1, ease: 'easeInOut', type: "tween" }
                        }}
                        viewport={{ once: true }}
                        className="overflow-hidden"
                    >
                        <img className='h-[125px] w-[160px] bg-[#56c8dc] rounded-full' src={girl} />
                    </motion.p>
                    <motion.span
                        initial={{ x: -100 }}
                        whileInView={{ 
                            x: 0,
                            transition: { 
                                delay: 0.5, 
                                duration: 1,
                                type: 'smooth', 
                                stiffness: 100 
                            }
                        }}
                        viewport={{ once: true }}
                        className='text-[140px] overflow-hidden'
                    >
                        talk
                    </motion.span>
                    <button className='ml-4 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300'>
                        <MoveRight size={90} />
                    </button>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
