// import IMAGES from "../assets/data/homepics.jsx"
import { useState, useEffect } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

function ImageSlider () {

    function getImageUrl(name) {
        return new URL(`../img/recentwork/${name}.jpg`, import.meta.url).href
      }
    
    const [currentIndex, setCurrentIndex] = useState(0);
    let [id, setId] = useState();
    
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
        // clearInterval(id);
        setId(setInterval(() => { nextSlide()}, 5000));
    
        return () => {
          clearInterval(id);
        };
      }, [currentIndex]);
    

    const slides = [
        {
            title: "highvyn-min"
        },
        {
            title: "bean-min"
        },
        {
            title: "ricepaddyheroes2-min"
        },
        {
            title: 'jabin-min'
        }, 
        {
            title: 'dhadak-min'
        },
        {
            title: "hojean-min"
        }, 
        {
            title: "hongkong2-min"
        },
        {
            title: "gabiandfriends-min"
        },
        {
            title: "ricepaddyheroes-min"
        },
        {
            title: "hongkong-min"
        }, 
        {
            title: "LASkyline-min"
        },
        {
            title: "tifday-min"
        },
        {
            title: "hongdaenight-min"
        }
    ]

    return(
            <main className="py-12 w-full h-screen ">
                <div className="py-8 flex flex-col image-container max-w-[1400px] h-full w-full m-auto px-4 relative justify-center animate-fadein">
                    <img src={getImageUrl(slides[currentIndex].title)} className="flex max-h-full max-w-full object-contain justify-self-start"/>
                    <div className="absolute top-[47%] -translate-x-0 translate-y-[-47%] left-5 text-l md:text-3xl rounded-full p-1 bg-white/50 text-black hover:bg-black/50 hover:text-white cursor-pointer duration-300">
                        <HiOutlineChevronLeft onClick={prevSlide}/>
                    </div>
                    <div className="absolute top-[47%]  -translate-x-0 translate-y-[-47%] right-5 text-l md:text-3xl rounded-full p-1 bg-white/50 text-black hover:bg-black/50 hover:text-white cursor-pointer duration-300">
                        <HiOutlineChevronRight onClick={nextSlide} />
                    </div>
                    <h1 className="duration-500 text-center text-4xl pt-4 xl:text-5xl font-sans font-thin tracking-wider">recent</h1> 


                </div>
            </main>
    )
}

export default ImageSlider;