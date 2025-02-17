import { useRef, useState, useEffect } from "react"

import Spiral from "../assets/Homepage/spiral.png"
import asset from "../assets/Homepage/asset.png"

import { X, VolumeOff, Volume2, ChevronLeft, ChevronRight} from "lucide-react"
import reelPoster from "../assets/Homepage/reelPoster.png"
// Icons for images 
import asset_1 from "../assets/Homeicons/asset-1.png"
import asset_2 from "../assets/Homeicons/asset-2.png"
import asset_3 from "../assets/Homeicons/asset-3.png"
import asset_4 from "../assets/Homeicons/asset-4.png"
// Spiral motion animation Alpheric
import alpheric_animation from "../assets/Homepage/alpheric-gif.gif"

// import playButton from "../assets/Videos/play.png"

const HomePage = () => {
    const videoRef = useRef(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            videoRef.current.playsInline = true;
            videoRef.current.play()
        }
    }, []);

    const handleVolumeToggle = () => {
        if (videoRef.current) {
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = 1;
            } else {
                videoRef.current.muted = true;
                videoRef.current.volume = 0;
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <section id="#" className="min-h-screen w-full bg-gradient-to-br from-white to-[#F5F0FF] overflow-clip">
            <div className="w-full my-5 px-[116px] h-screen flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={asset} alt="Image asset" />
                        </div>


                        <div className="space-y-8 mt-14">
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                        behavior: "smooth"
                                    });
                                }} className="px-8 py-3 rounded-full border border-black text-lg hover:bg-[#56c8dc] hover:text-white">
                                Let's Talk
                            </button>

                            <div className="flex gap-6 font-urbanist">
                                <p className="text-[20px] text-gray-600">You'll Be Talking With Our Creative Talents:</p>
                                <div className="flex space-x-2">
                                    <div className="w-[32px] h-[32px] border-2 border-white bg-gray-200 shadow-lg"><img src={asset_1} /></div>
                                    <div className="w-[32px] h-[32px] border-white bg-gray-200 shadow-lg"><img src={asset_2} /></div>
                                    <div className="w-[32px] h-[32px] border-white bg-gray-200 shadow-lg"><img src={asset_3} /></div>
                                    <div className="w-[32px] h-[32px] border-white bg-gray-200 shadow-lg"><img src={asset_4} /></div>
                                </div>
                                <p className="text-[20px] text-gray-600 max-w-md">
                                    Let's Craft A Digital Strategy Powered By
                                    Award-Winning Tech To Drive Real Results And
                                    Grow Your Business — Together!  🚀
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 relative h-full flex items-center justify-end">
                        {/* Circular Logo */}
                        <div className="absolute left-10 bottom-50 ">
                            <div className="relative w-34 h-34">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-30 h-30 rounded-full flex items-center justify-center ">
                                        <img src={alpheric_animation} alt="alpheric-logo" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Spiral Image */}
                        <div className="relative">
                            <div className="w-[900px] mx-auto h-[690px] absolute right-[-260px] top-[-400px]">
                                <img src={Spiral} />
                            </div>
                            {/* Reel panel */}
                            {isShowingPanel && (
                                <div className="fixed bottom-25 right-8 bg-slate-900 text-white rounded-4xl w-70 z-55">
                                    <div className="relative">
                                        <video
                                            // src={sample}
                                            src="https://rondesignlab.com/video/common/intercom.mp4"
                                            className="w-full object-cover rounded-4xl"
                                            ref={videoRef}
                                            id="videoPlayer"
                                            poster={reelPoster}
                                            autoPlay
                                            playsInline
                                            muted
                                        />
                                        <button
                                            onClick={() => setIsShowingPanel(false)}
                                            className="absolute top-4 right-4 bg-white p-2 rounded-xl text-black z-10 hover:bg-black hover:text-white "
                                        >
                                            <X />
                                        </button>


                                        <button
                                            onClick={handleVolumeToggle}
                                            className="absolute top-4 left-4 bg-white p-2 rounded-xl text-black z-10 hover:bg-black hover:text-white"
                                        >
                                            {isMuted ? <VolumeOff /> : <Volume2 />}
                                        </button>


                                        <button
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                                    behavior: "smooth"
                                                });
                                            }}
                                            className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-40 h-14 bg-black text-white font-medium rounded-full py-2 text-xl hover:bg-white transition hover:text-black ">
                                            Let's Talk 👋
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Side button for Reel */}
                            <button 
                            className="fixed bottom-25 -right-5 bg-white text-black rounded-4xl h-40 w-10 z-55 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                            onClick={() => setIsShowingPanel(true) }>
                                { isShowingPanel ? <ChevronRight /> : <ChevronLeft />}
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage