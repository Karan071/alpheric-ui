import { useRef, useState, useEffect } from "react"
import Spiral from "../assets/Homepage/spiral.png"
import asset from "../assets/Homepage/asset.png"
import { X, VolumeOff, Volume2, ChevronLeft, ChevronRight } from "lucide-react"
import reelPoster from "../assets/Homepage/reelPoster.png"

import asset_1 from "../assets/Homeicons/asset-1.png"
import asset_2 from "../assets/Homeicons/asset-2.png"
import asset_3 from "../assets/Homeicons/asset-3.png"
import asset_4 from "../assets/Homeicons/asset-4.png"
import asset_5 from "../assets/Homeicons/asset-5.png"

import alpheric_animation from "../assets/Homepage/alpheric-gif.gif"


const HomePage = () => {
    const videoRef = useRef(null);
    const [isShowingPanel, setIsShowingPanel] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.autoplay = true;
            videoRef.current.playsInline = true;
            videoRef.current.loop = true;
            videoRef.current.play().catch(error => {
                console.error("Error attempting to play:", error);
            });
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
        <section id="#" className="min-h-screen w-full bg-[radial-gradient(ellipse_50%_100%_at_top_right,#EDE6FE_10%,#FFFFFF_100%)] overflow-clip">
            <div className="w-full h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-[80px]">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-0">

                    {/* Left content section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center mt-16 lg:mt-0">
                        <div className="flex items-center gap-2">
                            <img src={asset} alt="Image asset" className="w-auto h-auto " />
                        </div>
                        <div className="space-y-6 md:space-y-8 mt-8 md:mt-14">
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                        behavior: "smooth"
                                    });
                                }} className="px-6 sm:px-8 py-2 sm:py-3 rounded-full border border-black text-base sm:text-lg hover:bg-[#56c8dc] hover:text-white transition-colors">
                                Let's Talk
                            </button>

                            <div className="flex flex-col sm:flex-row md:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4 font-urbanist md:mt-10">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                                    <p className="text-base sm:text-[20px] text-gray-600">You'll Be Talking With <br /> Our Creative Talents.</p>
                                    <div className="flex space-x-1">
                                        <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"><img src={asset_1} alt="Team member 1" /></div>
                                        <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"><img src={asset_2} alt="Team member 2" /></div>
                                        <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"><img src={asset_3} alt="Team member 3" /></div>
                                        <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"><img src={asset_4} alt="Team member 4" /></div>
                                        <div className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]"><img src={asset_5} alt="Team member 5" /></div>
                                    </div>
                                </div>
                                <p className="text-base sm:text-[20px] text-gray-600 max-w-md">
                                    Let's Craft A Digital Strategy Powered By <br className="hidden sm:block" />
                                    Award-Winning Tech To Drive Real Results And <br className="hidden sm:block" />
                                    Grow Your Business — Together!  🚀
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right content section with spiral and animation */}
                    <div className="w-full lg:w-1/2 relative h-full flex items-center justify-center lg:justify-end">
                        <div className="hidden md:block absolute left-20 bottom-38 z-10">
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center">
                                        <img src={alpheric_animation} alt="alpheric-logo" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Spiral background */}
                            <div className="hidden md:block w-full md:w-[600px] lg:w-[900px] mx-auto h-[690px] md:absolute md:right-[-700px] lg:right-[-280px] md:top-[-600px] lg:top-[-400px]">
                                <img src={Spiral} alt="Spiral background" className="w-full h-auto" />
                            </div>

                            {/* Video panel */}
                            {isShowingPanel && (
                                <div className="fixed bottom-6 sm:bottom-16 md:bottom-25 right-2 sm:right-6 md:right-8 bg-slate-900 text-white rounded-3xl sm:rounded-4xl h-[280px] sm:h-[350px] md:h-[409px] w-[180px] sm:w-[200px] md:w-[230px] z-50">
                                    <div className="relative">
                                        <video
                                            src="https://rondesignlab.com/video/common/intercom.mp4"
                                            className="w-full object-cover rounded-3xl sm:rounded-4xl"
                                            ref={videoRef}
                                            poster={reelPoster}
                                            autoPlay
                                            playsInline
                                            muted
                                        />
                                        <button
                                            onClick={() => setIsShowingPanel(false)}
                                            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                                        >
                                            <X size={16} className="sm:hidden" />
                                            <X size={25} className="hidden sm:block" />
                                        </button>

                                        <button
                                            onClick={handleVolumeToggle}
                                            className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white h-[24px] w-[24px] sm:h-[32px] sm:w-[32px] rounded-lg sm:rounded-xl text-black z-10 hover:bg-black hover:text-white flex justify-center items-center p-1"
                                        >
                                            {isMuted ? (
                                                <>
                                                    <VolumeOff size={16} className="sm:hidden" />
                                                    <VolumeOff size={25} className="hidden sm:block" />
                                                </>
                                            ) : (
                                                <>
                                                    <Volume2 size={16} className="sm:hidden" />
                                                    <Volume2 size={25} className="hidden sm:block" />
                                                </>
                                            )}
                                        </button>

                                        <button
                                            onClick={() => {
                                                window.scrollTo({
                                                    top: document.documentElement.scrollHeight || document.body.scrollHeight,
                                                    behavior: "smooth"
                                                });
                                            }}
                                            className="absolute bottom-3 sm:bottom-5 left-1/2 transform -translate-x-1/2 w-[130px] sm:w-[173px] h-[36px] sm:h-[46px] bg-black text-white font-medium rounded-[63px] py-1 sm:py-2 text-sm sm:text-xl hover:bg-white transition hover:text-black">
                                            Let's Talk 👋
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Toggle button for panel */}
                            <button
                                className="fixed bottom-16 sm:bottom-24 md:bottom-30 right-0 sm:-right-3 md:-right-5 bg-white text-black rounded-l-4xl h-12 w-6 sm:h-16 sm:w-8 md:h-20 md:w-10 z-50 hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                                onClick={() => setIsShowingPanel(true)}>
                                {isShowingPanel ? (
                                    <ChevronRight size={16} className="sm:hidden" />
                                ) : (
                                    <ChevronLeft size={16} className="sm:hidden" />
                                )}
                                {isShowingPanel ? (
                                    <ChevronRight size={24} className="hidden sm:block" />
                                ) : (
                                    <ChevronLeft size={24} className="hidden sm:block" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage