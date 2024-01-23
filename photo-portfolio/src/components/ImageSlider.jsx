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
            <main className="py-12 w-full h-screen ">
                <div className="py-8 flex flex-col image-container max-w-[1400px] h-full w-full m-auto px-4 relative justify-center">
                    <img src={getImageUrl(slides[currentIndex].title)} className="flex max-h-full w-full object-contain justify-self-start duration-500"/>
                    <div className="absolute top-[47%] -translate-x-0 translate-y-[-47%] left-6 text-l md:text-3xl rounded-full p-2 bg-white/50 text-black cursor-pointer duration-500">
                        <FaChevronLeft onClick={prevSlide}/>
                    </div>
                    <div className="absolute top-[47%] -translate-x-0 translate-y-[-47%] right-6 text-l md:text-3xl rounded-full p-2 bg-white/50 text-black cursor-pointer duration-500">
                        <FaChevronRight onClick={nextSlide} />
                    </div>
                    <h1 className="duration-500 text-center text-2xl md:text-4xl pt-4 xl:text-5xl font-sans font-thin tracking-wider">recent</h1> 


                </div>
            </main>
    )
}

export default ImageSlider;