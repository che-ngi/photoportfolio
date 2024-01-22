// import IMAGES from "../assets/data/homepics.jsx"
import { useState, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function ImageSlider () {

    function getImageUrl(name) {
        return new URL(`../img/recentwork/${name}.jpg`, import.meta.url).href
      }
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };

    useEffect(() => {
        const id = setInterval(() => { nextSlide()}, 3000);
    
        return () => {
          clearInterval(id);
        };
      }, [currentIndex]);
    

    const slides = [
        {
            title: "highvyn"
        },
        {
            title: "bean"
        },
        {
            title: "LASkyline"
        },
        {
            title: "dhadak"
        }, 
        {
            title: "hojean"
        }, 
        {
            title: "hongkong2"
        },
        {
            title: "nycpark"
        },
        {
            title: "ricepaddyheroes"
        },
        {
            title: "hongkong"
        }, 
        {
            title: "ricepaddyheroes2"
        },
        {
            title: "tifday"
        }
    ]

    return(
            <main className="py-12 w-full">
                <div className="image-container max-w-[1400px] h-[95%] w-full m-auto px-4 relative">
                    <div style={{ backgroundImage: `url(${getImageUrl(slides[currentIndex].title)})`}} className="w-full h-full bg-center bg-contain bg-no-repeat duration-500"> 
                    </div>
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-6 text-l md:text-3xl rounded-full p-2 bg-white/50 text-black cursor-pointer duration-500">
                        <FaChevronLeft onClick={prevSlide}/>
                    </div>
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-6 text-l md:text-3xl rounded-full p-2 bg-white/50 text-black cursor-pointer duration-500">
                        <FaChevronRight onClick={nextSlide} />
                    </div>
                    <h1 className="w-full text-center text-5xl mt-4 font-sans font-thin tracking-wider">recent work</h1>


                </div>
            </main>
    )
}

export default ImageSlider;