import React from 'react'
import arrow from "../assets/Arrow.png"
import videsection from "../assets/hero.png"

const Design = () => {
    return (
        <section id="about">
            <div className='max-w-full flex flex-col px-15 mt-10'>
                <p className='text-8xl font-Instrumental-serif mb-4'>We do amazing things</p>
                <div className='flex items-center gap-4'>
                    <img src={arrow} alt="arrow" className='w-12' />
                    <div className='font-Instrumental-serif text-4xl italic'>oh, with amazing people too</div>
                </div>
                <img src={videsection} alt="" className='mt-8' />
            </div>
        </section>
    )
}

export default Design
