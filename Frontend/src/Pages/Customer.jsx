import Segment from "../assets/Ticker/Segment.svg";
import ShutterFrame from "../assets/Ticker/Shutterframe.svg";
import Sisyphus from "../assets/Ticker/Sisyphus.svg";
import Solaris from "../assets/Ticker/Solaris.svg";
import Sonorous from "../assets/Ticker/Sonorous.svg";
import Spherule from "../assets/Ticker/Spherule.svg";
import Stack3dLab from "../assets/Ticker/Stack3d.svg";
import Visionwork from "../assets/Ticker/Visionwork.svg";
import Voxel_Labs from "../assets/Ticker/VoxelLabs.svg";
import Warpspeed from "../assets/Ticker/Warpspeed.svg";
import Watchtower from "../assets/Ticker/Watchtower.svg";
import Wildcrafted from "../assets/Ticker/Wildcrafted.svg";

const logos = [
    Segment, ShutterFrame, Sisyphus, Solaris,
    Sonorous, Spherule, Stack3dLab, Visionwork,
    Voxel_Labs, Warpspeed, Watchtower, Wildcrafted
];

const Customer = () => {
    return (
        <section className="h-[400px] px-[120px] flex justify-center items-center ">
            <div className="grid grid-cols-3 gap-10 items-center">
                <div className="text-7xl font-instrument-serif col-span-1">
                    Trusted by our Customers & Partners
                </div>
                <div className="grid grid-cols-4 grid-rows-3 gap-6 p-10 col-span-2 border-l-2">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt="logo" className="h-[45px]" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customer;
