import React from 'react'
import arrow from "../assets/Arrow.png"
import videsection from "../assets/hero.png"

const Design = () => {
    return (
        <section id="about">
            <div className=' max-w-full'>
                <p className='text-5xl font-Instrumental-serif'>We do amazing things</p>
                <div className='flex'>
                    <img src={arrow} alt="arrow" />
                    <div className='font-Instrumental-serif font-3xl italic'>oh, with amazing people too</div>
                </div>

                <img src={videsection} alt="" />
            </div>
        </section >
    )
}

export default Design
