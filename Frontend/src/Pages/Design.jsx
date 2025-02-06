import React from 'react'
import sampleVideo from "../assets/Videos/sample-video.mp4"
import videsectionImage from "../assets/design-asset-cropped.png"
import { useRef } from 'react'
import { MoveRight } from 'lucide-react'
import playButton from "../assets/Videos/play.png"

const Design = () => {
    const videoRef = useRef(null);
    return (
        <section id="about">
            <div className='max-w-full flex flex-col px-18 mt-10'>
                <p className='text-6xl font-Instrumental-serif mb-4'>We do amazing things</p>
                <div className='flex items-center justify-start gap-4 font-Instrumental-serif text-4xl italic mb-10'>
                    <MoveRight size={60} /> oh, with amazing people too</div>
                <div className='relative'>
                    <video 
                    className='w-screen rounded-2xl h-auto '
                    ref={videoRef}
                    src={sampleVideo}
                    poster={videsectionImage}
                    >
                    </video>
                    <button
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-white/10 rounded-full p-4 z-10"
                        onClick={() => {
                            if (videoRef.current.paused) {
                                videoRef.current.play();
                            } else {
                                videoRef.current.pause();
                            }
                        }}
                    >
                        <img className='w-35' src={playButton} alt="Play button" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Design;