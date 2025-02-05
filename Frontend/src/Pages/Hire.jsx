import React from 'react'
import CarouselCard from "../Components/CarouselCard";

const Hire = () => {
    return (
        <div>
            <h1>Hire</h1>
            <div className="flex overflow-x-auto space-x-4 p-4">
                <CarouselCard imageUrl={"https://picsum.photos/200/300"} title={"Technology"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/301"} title={"Design"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                <CarouselCard imageUrl={"https://picsum.photos/200/302"} title={"Marketing"}/>
                
            </div>
        </div>
    )
}

export default Hire
