import React from "react";
import CarouselCard from "../Components/CarouselCard";
import card1 from "../assets/Carousel/asset1.jpeg"
import card2 from "../assets/Carousel/asset2.jpeg"
import card3 from "../assets/Carousel/asset3.jpeg"
import card4 from "../assets/Carousel/asset4.jpeg"
import card5 from "../assets/Carousel/asset5.jpeg"

const Hire = () => {
    return (
        <section className="px-14 mt-10">
            <h1 className="font-Instrumental-sans text-5xl mb-6">Hire</h1>
            <div className='min-h-screen w-full px-15 flex items-center justify-start'>
                <div className="relative overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2 px-4 py-4 w-max scroll-smooth snap-x snap-mandatory">
                        <CarouselCard
                            imageUrl={card1}
                            title="Technology"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card2}
                            title="Project Manager"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card5}
                            title="Marketer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card3}
                            title="Developer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card4}
                            title="Designer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />
                        <CarouselCard
                            imageUrl={card5}
                            title="Marketer"
                            description="Stay ahead with the latest in tech trends."
                            visitLink="https://example.com"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hire;
