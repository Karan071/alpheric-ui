import Spiral from "../assets/spiral.png"
import asset from "../assets/asset.png"
import alpheric_logo from "../assets/alpheric-a1.jpeg"

const HomePage = () => {
    return (
        <section id="#" className="min-h-screen w-full bg-gradient-to-br from-white to-[#F5F0FF]">
            <div className="container mx-auto px-6 h-screen flex items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    {/* Left Section */}
                    <div className="md:w-1/2 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <img src={asset} alt="Image asset" />
                        </div>


                        <div className="space-y-8 mt-14">
                            <button className="px-8 py-3 rounded-full border border-black text-sm hover:bg-white hover:text-black">
                                Let's Talk
                            </button>

                            <div className="flex gap-6 font-urbanist">
                                <p className="text-md text-gray-600">You'll Be Talking With Our Creative Talents:</p>
                                <div className="flex -space-x-3">
                                    <div className="w-8 h-8  border-2 border-white bg-gray-200"></div>
                                    <div className="w-8 h-8  border-2 border-white bg-gray-200"></div>
                                    <div className="w-8 h-8  border-2 border-white bg-gray-200"></div>
                                    <div className="w-8 h-8  border-2 border-white bg-gray-200"></div>
                                </div>
                                <p className="text-md text-gray-600 max-w-md">
                                    Let's Craft A Digital Strategy Powered By
                                    Award-Winning Tech To Drive Real Results And
                                    Grow Your Business—Together!  🚀
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 relative h-full flex items-center justify-center">
                        {/* Circular Logo */}
                        <div className="absolute top-8 left-8">
                            <div className="relative w-34 h-34">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full border border-black flex items-center justify-center overflow-hidden">
                                        <img src={alpheric_logo} alt="alpheric-logo" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <svg className="animate-spin-slow absolute inset-0" viewBox="0 0 100 100">
                                    <defs>
                                        <path
                                            id="circlePath"
                                            d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                                            fill="none"
                                        />
                                    </defs>
                                    <text>
                                        <textPath href="#circlePath" fontSize="8" startOffset="0">
                                            • FOLLOW OUR DIGITAL JOURNEY • FOLLOW OUR DIGITAL JOURNEY
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        </div>

                        {/* Spiral Image */}
                        <div className="mt-12 relative">
                            <div className="aspect-square w-full max-w-xl mx-auto">
                                <img src={Spiral} />
                            </div>



                            {/* Chat Card */}
                            {/* <div className="absolute bottom-8 right-8 bg-slate-900 text-white p-4 rounded-lg w-64">
                                <button className="w-full bg-white text-black rounded-full py-2 mb-2 text-sm">
                                    Play Reel
                                </button>
                                <button className="w-full border border-white rounded-full py-2 text-sm">
                                    Let's Talk 👋
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage