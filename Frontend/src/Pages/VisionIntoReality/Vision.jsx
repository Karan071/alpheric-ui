import { memo } from 'react'
import visionGif from "../../assets/vision.gif";

// const MemoizedImage = memo(({ src, alt }) => (
//     <img src={src} alt={alt} />
// ));

const Vision = () => {
    return (
        <section className='h-screen flex justify-center items-center font-instrument-sans mt-30'>
            <img className="w-[800px] h-[800px]" src={visionGif} alt="gif" />
            <div className='absolute flex-1 flex-row text-[84px] justify-center items-center font-semibold text-outline'>
                <div className='flex justify-center items-center'>Let’s turn your vision into <br/> reality, one step at a time.</div>
            </div>
        </section>
    )
}

export default Vision
