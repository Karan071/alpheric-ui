import React from 'react'
import { MoveRight } from 'lucide-react'
import girl from "../assets/girls.png"

const Contact = () => {
    return (
        <section className='min-h-screen w-full px-15 flex items-center justify-start'>
            <div className='w-full max-w-4xl'>
                <h3 className='text-3xl mb-4'>Shall we chat?</h3>
                <h1 className='text-6xl font-bold mb-8'>hello@alpheric.com</h1>
                <div className='flex gap-6 items-center'>
                    <span className='text-9xl'>Let's</span>
                    <p>
                        <img className='h-auto w-6xl bg-sky-400 rounded-full' src={girl} />
                    </p>
                    <span className='text-9xl'>talk</span>
                    <button className='ml-4 px-6 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-300'>
                        <MoveRight size={90} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
